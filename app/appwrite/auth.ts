import { ID, OAuthProvider, Query } from "appwrite";
import { account, database, appwriteConfig } from "~/appwrite/client";
import { redirect } from "react-router";

export const getExistingUser = async (id: string) => {
  try {
    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", id)]
    );
    return documents.length > 0 ? documents[0] : null;
  } catch (error) {
    console.error("❌ Error fetching existing user:", error);
    return null;
  }
};

export const storeUserData = async () => {
  try {
    const user = await account.get();
    if (!user) throw new Error("User not found");

    const session = await account.getSession("current");
    const accessToken = session?.providerAccessToken;

    const profilePicture = accessToken
      ? await getGooglePicture(accessToken)
      : null;

    const createdUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        accountId: user.$id,
        email: user.email,
        name: user.name,
        imageUrl: profilePicture,
        joinedAt: new Date().toISOString(),
      }
    );

    return createdUser;
  } catch (error) {
    console.error("❌ Error storing user data:", error);
    return null;
  }
};

const getGooglePicture = async (accessToken: string) => {
  try {
    const response = await fetch(
      "https://people.googleapis.com/v1/people/me?personFields=photos",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch Google photo");

    const { photos } = await response.json();
    return photos?.[0]?.url || null;
  } catch (error) {
    console.error("❌ Error fetching profile picture:", error);
    return null;
  }
};

export const loginWithGoogle = async () => {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.location.origin}/`,      // Success redirect
      `${window.location.origin}/404`    // Failure redirect
    );
  } catch (error) {
    console.error("❌ Error starting OAuth2 session:", error);
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error("❌ Error logging out:", error);
  }
};

export const getUser = async () => {
  try {
    const user = await account.get();
    if (!user?.$id) return redirect("/sign-in");

    const { documents } = await database.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", user.$id)]
    );

    return documents.length > 0 ? documents[0] : redirect("/sign-in");
  } catch (error) {
    console.error("❌ Error in getUser:", error);
    return null;
  }
};

// ✅ This is called on page load to handle user persistence
export const clientLoader = async () => {
  try {
    const user = await account.get();
    if (!user?.$id) return redirect("/sign-in");

    const existingUser = await getExistingUser(user.$id);
    return existingUser || (await storeUserData());
  } catch (error) {
    console.error("❌ Error in clientLoader:", error);
    return redirect("/sign-in");
  }
};

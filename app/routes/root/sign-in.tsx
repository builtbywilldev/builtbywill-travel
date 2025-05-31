import { useEffect } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link, redirect } from "react-router";
import { loginWithGoogle, storeUserData } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

// export async function clientLoader() {
// try{
//   const user = await account.get()

//   if(user.$id) return redirect('/')
// }
  
// catch(e){
//   console.log('error fetching user', e)
// }

// }

const SignIn = () => {
  useEffect(() => {
    // After returning from OAuth, Appwrite has a valid session
    const patchUser = async () => {
      try {
        const user = await account.get();
        if (user?.$id) {
          console.log("🔐 User logged in, patching to DB...");
          await storeUserData();
        }
      } catch (err) {
        console.log("👻 No session or error fetching user", err);
      }
    };

    patchUser();
  }, []);

  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              <img src="/icons/logo.svg" alt="" className="size-[30px]" />
            </Link>
            <h1 className="p-28-bold text-dark-100">Haven Travel</h1>
          </header>
          <article>
            <h2 className="p-28-semi-bold text-dark-100 text-center">
              Start Your Next Adventure
            </h2>
            <p className="p-18-regular text-center text-gray-100 !leading-7">
              Sign in with Google to keep track of your journey! Itineraries, user activity, and destinations all in one place
            </p>
          </article>

          <ButtonComponent
            type="button"
            iconCss="e-search-icon"
            className="button-class !h-11 !w-full"
            onClick={loginWithGoogle}
          >
            <img src="/icons/google.svg" className="size-5" />
            <span className="p-18-semibold text-white">Sign in with Google</span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default SignIn;

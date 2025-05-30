import {Account, Client, Databases, Storage} from "appwrite"



export const appwriteConfig = {
    endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripsCollectionoId: import.meta.env.VITE_APPWRITE_TRIP_COLLECTIO_ID,
}


const client = new Client().setEndpoint(appwriteConfig.endpointUrl)
.setProject(appwriteConfig.projectId)


const account = new Account(client)
const database = new Databases(client)
const storage = new Storage(client)

export { client, account, database, storage}
import {Client , Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("64d3b7c6bfc9873d8c78")

export const account = new Account(client);
export const databases = new Databases(client , "64d3b9cf76d2074c8e08")
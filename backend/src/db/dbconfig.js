import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config()

const url = process.env.MONGODB_URI;
console.log(url); 
const dbName = "task-manager";
export const collectionName = "tasks";
const  client = new MongoClient(url);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
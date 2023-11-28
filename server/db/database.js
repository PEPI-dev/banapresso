import MongoDb from 'mongodb';
import { config } from "../config.js";

let db;
export async function connectDB() {
    return MongoDb.MongoClient.connect(config.db.host, {dbName: 'banapresso'})
        .then((client) =>db = client.db());
}

export function store_collection() {
    return db.collection('homework');
}
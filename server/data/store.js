import { store_collection } from '../db/database.js';


export async function getData() {
    try {
        const result = await store_collection().find().toArray(); 
        console.log(result);
        
        return result;
    } catch (error) {
        console.error('Error in getAll:', error);
        throw error;
    }
}
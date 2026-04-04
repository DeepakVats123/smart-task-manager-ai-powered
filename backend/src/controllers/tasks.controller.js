import { connectToDatabase, collectionName } from "../db/dbconfig.js";

export const createTask = async (req, res) => {
    
    if(!req.body.title || !req.body.description) {
        return res.status(400).json({
            messege: 'Title and description are required',
            status: 'error'
        });
    }

    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const newTask = await collection.insertOne(req.body);
    res.status(201).json({
        messege: 'Task created successfully',
        status: 'success',
        task: newTask
    });
}

export const getTasks = async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    res.status(200).json({
        messege: 'Tasks fetched successfully',
        status: 'success',
        tasks: result
    });
}
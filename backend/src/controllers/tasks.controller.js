import { connectToDatabase, collectionName } from "../db/dbconfig.js";
import { ObjectId } from 'mongodb';

//Create a new task
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

//Get all tasks
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

//Delete task by ID
export const deleteTask = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            messege: 'Invalid task ID',
            status: 'error'
        });
    }

    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

    
    res.status(200).json({
        messege: 'Task deleted successfully',
        
        status: 'success',
        task: result
    });
}

//update task status
export const updateTaskStatus = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            messege: 'Invalid task ID',
            status: 'error'
        });
    }
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { status: req.body.status } }
    );

    res.status(200).json({
        messege: 'Task status updated successfully',
        status: 'success',
        task: result
    });

}

//Generate task summary using Gemini AI API
export const generateTaskSummary = async (req, res) => {
    const tasks = req.body
    const API_KEY = process.env.GEMINI_API_KEY;
    const API_URL = process.env.GEMINI_API_URI + API_KEY;

    const prompt = `
                    ### ROLE
                    You are a highly efficient Productivity Assistant. Your task is to analyze a user's tasks list and provide a high-level executive summary.

                    ### INPUT DATA (JSON Array)
                    ${JSON.stringify(tasks)}

                    ### INSTRUCTIONS
                    1. Analyze the "status" of each task.
                    2. Identify the most urgent or important tasks based on the "title" and "description".
                    3. Provide a summary that is exactly 4 sentences long.
                    4. The first sentence should state the overall progress (how many done vs. total).
                    5. The second sentence should highlight the most important pending task to focus on next based on the "title" and "description".
                    6. The third sentence should provide a motivational statement to encourage the user to complete their tasks.
                    7. The fourth sentence should offer a general productivity tip related to task management.

                    ### OUTPUT TONE
                    Professional, encouraging, and concise. Do not use preamble like "Here is your summary." Start directly with the analysis.
                    `;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const result = await response.json();
    
    if (result.error) {
        console.error("Quota Error:", result.error.message);
        return "Summary currently unavailable due to rate limits.";
    }

    res.status(200).json({
        messege: 'Task summary generated successfully',
        status: 'success',
        summary: result.candidates[0].content.parts[0].text
    });

}
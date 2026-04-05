import {Router} from "express";
import { createTask, getTasks, deleteTask, updateTaskStatus } from "../controllers/tasks.controller.js";


const taskRouter = Router();

taskRouter.post("/tasks", createTask )
taskRouter.get("/tasks", getTasks)
taskRouter.delete("/tasks/:id", deleteTask)

//update task status
taskRouter.put("/tasks/:id", updateTaskStatus);


export default taskRouter;
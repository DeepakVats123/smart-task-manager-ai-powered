import {Router} from "express";
import { createTask, getTasks, deleteTask } from "../controllers/tasks.controller.js";


const taskRouter = Router();

taskRouter.post("/tasks", createTask )
taskRouter.get("/tasks", getTasks)
taskRouter.delete("/tasks/:id", deleteTask)

export default taskRouter;
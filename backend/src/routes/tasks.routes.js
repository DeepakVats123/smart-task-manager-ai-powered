import {Router} from "express";
import { createTask, getTasks } from "../controllers/tasks.controller.js";

const taskRouter = Router();

taskRouter.post("/tasks", createTask )
taskRouter.get("/tasks", getTasks)

export default taskRouter;
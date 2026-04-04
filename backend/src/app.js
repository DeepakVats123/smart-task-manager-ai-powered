import express from "express";
import taskRouter from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use("/api/v1", taskRouter)

export default app;
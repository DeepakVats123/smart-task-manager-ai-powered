import {connectToDatabase} from "./db/dbconfig.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectToDatabase()
.then(() => {
    console.log("Connected to database successfully");
    app.listen(PORT || 5000, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to database:", error);
});


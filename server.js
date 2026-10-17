
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import noteRouter from "./routes/note.js";

const app = express();


app.use(express.json());

app.use("/api/notes", noteRouter);


async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully!");

        app.listen(process.env.PORT || 5011, () => {
            console.log(`Server is running..`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
}

startServer();

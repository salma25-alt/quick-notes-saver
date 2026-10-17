
import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// POST: Save a new note
router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;

        // Validate required fields
        if (
            typeof title !== "string" ||
            typeof content !== "string" ||
            !title.trim() ||
            !content.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required."
            });
        }

        // Create and save the note
        const note = await Note.create({
            title,
            content
        });

        return res.status(201).json({
            success: true,
            message: "Note saved successfully!",
            data: note
        });

    } catch (error) {
        console.error("Error saving note:", error);

        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: "Failed to save note."
        });
    }
});

// GET: Retrieve all notes
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find().sort({
            createdAt: -1
        });

        return res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        });

    } catch (error) {
        console.error("Error retrieving notes:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to retrieve notes."
        });
    }
});

export default router;

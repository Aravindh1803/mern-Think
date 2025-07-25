import express from "express"
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesControllers.js";


const router = express.Router();

router.get("/",getAllNotes)
router.get("/:id", getNoteById)
router.post("/",createNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)

export default router

// app.get("/api/notes", )

// app.post("/api/notes", )

// app.put("/api/notes/:id", )

// app.delete("/api/notes/:id", )


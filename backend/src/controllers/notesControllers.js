import Note from "../models/Note.js"
export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 })
        res.status(200).json(notes)
    } catch (error) {
        console.error("error in getAllNotes controller", error)
        res.status(500).json({ message: "internal server error" })
    }
}

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "noote not found" });
        res.status(200).json(note)
    } catch (error) {
        console.error("error in getNoteById controller", error)
        res.status(500).json({ message: "internal server error" })
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content })

        const saveNote = await note.save()
        res.status(201).json({ message: saveNote })
    } catch (error) {
        console.error("error in PostNote controller", error)
        res.status(500).json({ message: "internal server error" })

    }
}

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const upadatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!upadatedNote) return res.status(404).json({ message: "note not found" });
        res.status(200).json(
            upadatedNote
        );

    } catch (error) {
        console.error("error in UpdateNote controller", error)
        res.status(500).json({ message: "internal server error" })

    }
}

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "note not found" })
        res.status(200).json({ message: "Note deleted success" })

    } catch (error) {
        onsole.error("error in DeletNote controller", error)
        res.status(500).json({ message: "internal server error" })

    }
}
import React, { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

export function NoteProvider({ children }) {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notes");
        return saved ? JSON.parse(saved) : [];
    });

    const [editDate, setEditDate] = useState(null);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    // Add or update note
    function handleFormData(formData) {
        setNotes(prevState => {
            const noteExists = prevState.find(note => note.id === formData.id);
            if (noteExists) {
                return prevState.map(note =>
                    note.id === formData.id ? { ...note, ...formData } : note
                );
            } else {
                return [formData, ...prevState];
            }
        });
    }

    // Edit note
    function editNote(id) {
        const editData = notes.find(note => note.id === id);
        setEditDate(editData);
    }

    // Delete note
    function deleteNote(id) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this note?"
        );
        if (confirmDelete) {
            setNotes(prevState => prevState.filter(note => note.id !== id));
        }
    }

    return (
        <NoteContext.Provider
            value={{
                notes,
                handleFormData,
                editDate,
                setEditDate,
                editNote,
                deleteNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
}

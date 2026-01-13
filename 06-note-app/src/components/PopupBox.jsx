import React, { useEffect, useState, useContext } from "react";
import { getCurrentDate, setId } from "../util/currentDate.js";
import { NoteContext } from "../context/noteContext.jsx";

function PopupBox({ showPopup, closePopup }) {
    const { editDate, handleFormData, setEditDate } = useContext(NoteContext);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        content: "",
        date: ""
    });

    // When editDate changes or popup opens, set form
    useEffect(() => {
        if (editDate) {
            setFormData({
                id: editDate.id,
                title: editDate.title,
                content: editDate.content,
                date: editDate.date
            });
        } else {
            setFormData({ id: "", title: "", content: "", date: "" });
        }
    }, [editDate, showPopup]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formData.title.trim() || !formData.content.trim()) {
            alert("Title and description cannot be empty");
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 500));

        handleFormData({
            ...formData,
            date: getCurrentDate(),
            id: formData.id || setId()
        });

        setFormData({ id: "", title: "", content: "", date: "" });
        setIsSubmitting(false);
        setEditDate(null); // Reset edit state
        closePopup();
    }

    return (
        <div className={`popup-box ${showPopup ? "show" : ""}`}>
            <div className="popup">
                <div className="content">
                    <header>
                        <p>{editDate ? "Edit Note" : "Add a New Note"}</p>
                        <i className="uil uil-times" onClick={closePopup}></i>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="row title">
                            <label>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="row description">
                            <label>Description</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting
                                ? "Saving..."
                                : editDate
                                    ? "Update Note"
                                    : "Add Note"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupBox;

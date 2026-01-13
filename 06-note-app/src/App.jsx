import {useState, useEffect, useRef} from "react";
import "./App.css";
import PopupBox from "./components/PopupBox.jsx";
import { NoteProvider, NoteContext } from "./context/noteContext.jsx";

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [openMenuId, setOpenMenuId] = useState(null);
    const wrapperRef = useRef(null);

    function showPopupBox() {
        setShowPopup(prev => !prev);
    }
    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpenMenuId(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function closePopup() {
        setShowPopup(false);
    }

    function showMenu(id) {
        setOpenMenuId(prev => (prev === id ? null : id));
    }

    return (
        <NoteProvider>
            <NoteContext.Consumer>
                {({ notes, editDate, editNote, deleteNote, setEditDate }) => (
                    <>
                        <h2 className="text-center text-2xl">This is note app</h2>
                        <PopupBox
                            showPopup={showPopup}
                            closePopup={closePopup}
                            editData={editDate}
                        />

                        <div className="wrapper" ref={wrapperRef}>
                            <li className="add-box" onClick={showPopupBox}>
                                <div className="icon">
                                    <i className="uil uil-plus"></i>
                                </div>
                                <p>Add new note</p>
                            </li>
                            {notes.map(note => (
                                <li className="note" key={note.id}>
                                    <div className="details">
                                        <p>{note.title}</p>
                                        <span>{note.content}</span>
                                    </div>
                                    <div className="bottom-content">
                                        <span>{note.date}</span>
                                        <div
                                            className={`settings ${
                                                openMenuId === note.id ? "show" : ""
                                            }`}
                                        >
                                            <i
                                                onClick={() => showMenu(note.id)}
                                                className="uil uil-ellipsis-h"
                                            ></i>
                                            <ul className="menu">
                                                <li
                                                    onClick={() => {
                                                        editNote(note.id);
                                                        setShowPopup(true);
                                                    }}
                                                >
                                                    <i className="uil uil-pen"></i>Edit
                                                </li>
                                                <li onClick={() => deleteNote(note.id)}>
                                                    <i className="uil uil-trash"></i>Delete
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </>
                )}
            </NoteContext.Consumer>
        </NoteProvider>
    );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/search.png";

function CreateNote() {
    const navigate = useNavigate();

    const [allNotes, setAllNotes] = useState(getAllNotes());
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
        bgColor: "",
        textColor: "",
    });
    const [showCancelModal, setShowCancelModal] = useState(false);

    function getAllNotes() {
        return JSON.parse(localStorage.getItem("NotesData")) || [];
    }

    function handleCheck() {
        if (newNote.title === "" || newNote.content === "") {
            alert("Please enter title and content");
            return false;
        }
        return true;
    }

    function handleChange(e) {
        setNewNote({ ...newNote, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (handleCheck()) {
            setAllNotes([...allNotes, newNote]);
            setNewNote({ title: "", content: "", bgColor: "", textColor: "" });
            localStorage.setItem(
                "NotesData",
                JSON.stringify([...allNotes, newNote])
            );
            navigate("/");
            alert("Note created successfully!");
        }
    }

    function handleCancel(e) {
        e.preventDefault();
        setShowCancelModal(true);
    }

    function cancelNoteCreation() {
        setShowCancelModal(false);
        navigate("/");
    }

    function continueNoteCreation() {
        setShowCancelModal(false);
    }

    return (
        <div className="createNote">
            <form action="" onSubmit={handleSubmit}>
                <h4>Create Note</h4>

                <div className="title">
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        id=""
                        onChange={handleChange}
                        value={newNote.title}
                    />
                </div>

                <div className="content">
                    <label>Content:</label>
                    <textarea
                        name="content"
                        id=""
                        cols="30"
                        rows="3"
                        onChange={handleChange}
                        value={newNote.content}></textarea>
                </div>

                <div className="colors">
                    <div className="bgColor">
                        <label>Background Color: </label>
                        <input
                            type="color"
                            name="bgColor"
                            id=""
                            onChange={handleChange}
                            value={newNote.bgColor}
                        />
                    </div>

                    <div className="textColor">
                        <label>Text Color: </label>
                        <input
                            type="color"
                            name="textColor"
                            id=""
                            onChange={handleChange}
                            value={newNote.textColor}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <button className="submit" type="submit">
                        Create
                    </button>

                    <button className="cancel" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>

            <button className="search" onClick={() => navigate("/")}>
                <img src={img} alt="" />
            </button>

            {showCancelModal && (
                <div className="cancel-modal">
                    <p>Are you sure you want to cancel?</p>
                    <div className="buttons">
                        <button className="choose" onClick={cancelNoteCreation}>
                            Yes
                        </button>
                        <button
                            className="choose"
                            onClick={continueNoteCreation}>
                            No
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateNote;

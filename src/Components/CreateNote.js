import React, { useState } from 'react';

function CreateNote() {

    const [allNotes, setAllNotes] = useState(getAllNotes());

    const [newNote, setNewNote] = useState({ title: "", content: "", bgColor: "", textColor: "" });

    function getAllNotes() {
        return JSON.parse(localStorage.getItem("NotesData")) || [];
    }

    function handleChange(e) {
        setNewNote({ ...newNote, [e.target.name]: e.target.value })
    }

    return (
        <div>
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
                    <input
                        type="text"
                        name="content"
                        id=""
                        onChange={handleChange}
                        value={newNote.content}
                    />
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

                    <button className="cancel">Cancel</button>
                </div>
            </form>

            <button
                className="createANote"
                onClick={() => navigate("/")}>
                <img src={img} alt="" />
            </button>
        </div>
    )
}

export default CreateNote
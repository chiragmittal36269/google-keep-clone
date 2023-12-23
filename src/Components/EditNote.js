import React from "react";
import { FaFloppyDisk, FaXmark } from "react-icons/fa6";

function EditNote({ allNotes, setAllNotes, openNote, setOpeningNote }) {
    const [editNote, setEditNote] = React.useState(openNote);

    function handleChange(e) {
        setEditNote({ ...editNote, [e.target.name]: e.target.value });
    }

    function editComplete() {
        const newNotes = allNotes.map((note) => {
            if (note === openNote) {
                return editNote;
            }
            return note;
        });
        localStorage.setItem("NotesData", JSON.stringify(newNotes));
        setAllNotes(newNotes);
        setOpeningNote(false);
    }

    return (
        <div className="editNote">
            <div className="title">
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    id=""
                    onChange={handleChange}
                    value={editNote.title}
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
                    value={editNote.content}></textarea>
            </div>

            <div className="colors">
                <div className="bgColor">
                    <label>Background Color: </label>
                    <input
                        type="color"
                        name="bgColor"
                        id=""
                        onChange={handleChange}
                        value={editNote.bgColor}
                    />
                </div>

                <div className="textColor">
                    <label>Text Color: </label>
                    <input
                        type="color"
                        name="textColor"
                        id=""
                        onChange={handleChange}
                        value={editNote.textColor}
                    />
                </div>
            </div>

            <div className="buttons">
                <button className="save" onClick={editComplete}>
                    <FaFloppyDisk />
                </button>

                <button
                    className="cancel"
                    onClick={() => setOpeningNote(false)}>
                    <FaXmark />
                </button>
            </div>
        </div>
    );
}

export default EditNote;

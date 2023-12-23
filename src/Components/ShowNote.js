import React from "react";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

function ShowNote({ allNotes, setAllNotes, setOpenNoteValue, editANote }) {
    function deleteANote(note) {
        let value = prompt("Are you sure?");
        if (value.toLowerCase() === "yes") {
            const newNotes = allNotes.filter((n) => n !== note);
            localStorage.setItem("NotesData", JSON.stringify(newNotes));
            setAllNotes(newNotes);
        }
    }

    return (
        <div className="showNote">
            {allNotes.map((note, idx) => (
                <div
                    key={idx}
                    style={{
                        backgroundColor: note.bgColor,
                        color: note.textColor,
                    }}
                    className="note"
                    onClick={() => {
                        setOpenNoteValue(note);
                    }}>
                    <h4 className="title">{note.title}</h4>
                    <hr />
                    <p className="content">{note.content}</p>
                    <hr />
                    <div className="icons">
                        <p
                            className="edit"
                            onClick={(e) => {
                                e.stopPropagation();
                                editANote(note);
                            }}>
                            <FaPenToSquare />
                        </p>
                        <p
                            className="delete"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteANote(note);
                            }}>
                            <FaTrash />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShowNote;

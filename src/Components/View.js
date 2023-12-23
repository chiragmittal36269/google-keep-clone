import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditNote from "./EditNote";
import OpeningNote from "./OpeningNote";
import SearchNote from "./SearchNote";
import ShowNote from "./ShowNote";

function View() {
    const navigate = useNavigate();

    const [openingNote, setOpeningNote] = useState(false);

    const [allNotes, setAllNotes] = useState(getAllNotes());

    const [search, setSearch] = useState("");

    const [openNote, setOpenNote] = useState({});

    const [noteEditing, setNoteEditing] = useState(false);

    function getAllNotes() {
        return JSON.parse(localStorage.getItem("NotesData")) || [];
    }

    function setOpenNoteValue(note) {
        setOpenNote(note);
        setOpeningNote(true);
        setNoteEditing(false);
    }

    function editANote(note) {
        setOpenNote(note);
        setOpeningNote(true);
        setNoteEditing(true);
    }

    useEffect(() => {
        if (search === "") {
            setAllNotes(getAllNotes());
        } else {
            setAllNotes([
                ...allNotes.filter((item) => {
                    return (
                        item.title
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        item.content
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    );
                }),
            ]);
        }
    }, [search]);

    return (
        <div className="view">
            {allNotes.length === 0 ? (
                <div className="no-notes">Please Create a Note.</div>
            ) : !openingNote ? (
                <div className="view-container">
                    <SearchNote setSearch={setSearch} />
                    <ShowNote
                        allNotes={allNotes}
                        setAllNotes={setAllNotes}
                        setOpenNoteValue={setOpenNoteValue}
                        editANote={editANote}
                    />
                </div>
            ) : (
                ""
            )}
            {!openingNote ? (
                <button className="create" onClick={() => navigate("/create")}>
                    +
                </button>
            ) : (
                ""
            )}

            {openingNote && !noteEditing && (
                <OpeningNote
                    openNote={openNote}
                    setOpeningNote={setOpeningNote}
                />
            )}

            {openingNote && noteEditing && (
                <EditNote
                    allNotes={allNotes}
                    setAllNotes={setAllNotes}
                    openNote={openNote}
                    setOpeningNote={setOpeningNote}
                />
            )}
        </div>
    );
}

export default View;

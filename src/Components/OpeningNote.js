import React from "react";
import { FaXmark } from "react-icons/fa6";

const OpeningNote = ({ openNote, setOpeningNote }) => {
    return (
        <div
            className="openingNote"
            style={{
                backgroundColor: openNote.bgColor,
                color: openNote.textColor,
            }}>
            <FaXmark
                onClick={() => setOpeningNote(false)}
                className="close-btn"
            />
            <h4 className="title">{openNote.title}</h4>
            <hr />
            <p className="content">{openNote.content}</p>
        </div>
    );
};

export default OpeningNote;

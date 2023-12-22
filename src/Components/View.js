import React, { useEffect, useState } from 'react';
import SearchNote from './SearchNote';
import ShowNote from './ShowNote';

function View() {

    const [allNotes, setAllNotes] = useState(getAllNotes());

    const [search, setSearch] = useState([])

    function getAllNotes() {
        return JSON.parse(localStorage.getItem("NotesData")) || [];
    }

    useEffect(() => {
        setAllNotes([...allNotes.filter(item => {
        })])
    }, [setSearch])

    return (
        <div>{allNotes.length === 0 ? <div>Please Create a Note.</div> : <div>
            <SearchNote setSearch={setSearch} />
            <ShowNote allNotes={allNotes} />
        </div>
        }

            <button>Create A Note</button>
        </div>
    )
}

export default View
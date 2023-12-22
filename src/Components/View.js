import React, { useEffect, useState } from 'react';
import SearchNote from './SearchNote';
import ShowNote from './ShowNote';

function View() {

    const [allNotes, setAllNotes] = useState(getAllNotes());

    comst[search, setSearch] = useState([])

    function getAllNotes() {
        return localStorage.getItem("NotesData") || [];
    }

    useEffect(() => { })

    return (
        <div>{allNotes.length === 0 ? <div>Please Create a Note.</div> : <div>
            <SearchNote />
            <ShowNote />
        </div>
        }

            <button>Create A Note</button>
        </div>
    )
}

export default View
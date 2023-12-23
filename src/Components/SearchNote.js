import React from "react";

function SearchNote({ setSearch }) {
    // const [searching, setSearching] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setSearch(searching);
    // }

    return (
        <div className="searchInput">
            <form action="">
                <input
                    type="search"
                    name=""
                    id=""
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter the search term"
                />
            </form>
        </div>
    );
}

export default SearchNote;

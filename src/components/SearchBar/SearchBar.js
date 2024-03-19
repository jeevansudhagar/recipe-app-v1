import React, { useState } from "react";
import './SearchBar.scss';

function SearchBar() {
    const [searchText, setSearchText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchText)
        setSearchText("")

    }
    return (
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search recipes" value={searchText} onChange={e => setSearchText(e.target.value)} />
                <button type="submit">search</button>
            </form>

        </div>
    )
}
export default SearchBar;

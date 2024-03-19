import React from "react";
import './Header.scss';
import SearchBar from "../SearchBar/SearchBar";

function Header({title=('my app')}){
    return(
        <div className="header">
         <div className="title">{title}</div>
        <SearchBar/>
        </div>
        
    )
}
export default Header;
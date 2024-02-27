import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return(
        <div className="p-5 w-48">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Vedios</li>
                <li>List</li>
            </ul>
            <h3 className="font-bold">Subscription</h3>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h3 className="font-bold pt-5">Watch Later</h3>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar;
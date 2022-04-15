import React from 'react';
import {Router, Route, NavLink} from 'react-router-dom';

const NavBar = ()=>{

    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cats">Cats</NavLink></li>
                <li><NavLink to="cars">Cars</NavLink></li>
                <li><NavLink to="dogs">Dogs</NavLink></li>
            </ul>
        </nav>

    );
}

export default NavBar;
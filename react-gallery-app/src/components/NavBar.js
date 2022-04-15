import React from 'react';
import {Router, Route, NavLink} from 'react-router-dom';

const NavBar = ()=>{

    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cats"><button>Cats</button></NavLink></li>
                <li><NavLink to="dogs"><button>Dogs</button></NavLink></li>
                <li><NavLink to="cars"><button>Cars</button></NavLink></li>
            </ul>
        </nav>

    );
}

export default NavBar;
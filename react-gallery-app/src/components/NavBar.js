import React from 'react';
import {Router, Route, NavLink} from 'react-router-dom';

const NavBar = ()=>{

    return(
        <nav className="main-nav">
            <ul>
                <li><button>Cats</button></li>
                <li><button>Dogs</button></li>
                <li><button>Buttons</button></li>
            </ul>
        </nav>




    );
}

export default NavBar;
import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = ()=> {
    return(
        <header className="App-header">
            <SearchForm />
        </header>
    )
}

export default Header;


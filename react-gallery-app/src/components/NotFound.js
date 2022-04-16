import React from 'react';
import NavBar from './NavBar';
import SearchForm from './SearchForm';

const NotFound = ()=> {
    return(
        <div className="not-found">
            <SearchForm />
            <h3>Page not found</h3>
            <p>Your seach did not show any results</p>
        </div>
    );
}

export default NotFound;
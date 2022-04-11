import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(){
        super();
    }
    // search form
    // handle submit
    // take input and put into variable
    // see if variable matches value of json data
    // send that value to photos component as prop

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchResults();


    }
    
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <label>Search:
                    <input type="text" placeholder="Search" name="search" />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default SearchForm;
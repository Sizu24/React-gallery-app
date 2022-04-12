import React, { Component } from 'react';

class SearchForm extends Component {

    // search form
    // handle submit
    // take input and put into variable
    // see if variable matches value of json data
    // send that value to photos component as prop

    handleSubmit = (e) => {
        e.preventDefault();
        const textInput = React.createRef();
        this.props.searchResults();
    }
    
    render(){
        return(
            <form onSubmit={ this.handleSubmit.bind(this) }>
                <label>Search:
                    <input type="text" ref={this.textInput} placeholder="Search" name="search" />
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default SearchForm;
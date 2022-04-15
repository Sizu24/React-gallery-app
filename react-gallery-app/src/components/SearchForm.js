import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';

class SearchForm extends Component {

    // Variable to store ref data from input element inside the form
    textInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        // Runs the searchGifs method in App.js, and sends it the value from the ref in the form
        this.props.searchResults(this.textInput.current.value);
    }
    
    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <label>Search:
                        {/** Ref references this <input> and sends the value to textInput */}
                        <input type="text" ref={ this.textInput } placeholder="Search" name="search" />
                    </label>
                    <input type="submit" value="submit" />
                </form>
                <NavBar />
            </div>
        );
    }
}

export default SearchForm;
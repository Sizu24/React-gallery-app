import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {

    constructor(){
        super();
        this.textInput = React.createRef();
    }

    state = {
        inputValue: ""
    }

    // Variable to store ref data from input element inside the form
    
    handleSubmit = (e) => {
        e.preventDefault();
        // Runs the searchGifs method in App.js, and sends it the value from the ref in the form
        this.props.searchResults(this.textInput.current.value);
        console.log(this.textInput.current.value);
        e.currentTarget.reset();

    }

    // Get the typed characters in the search input
    onInputType = e =>{
        this.setState( { inputValue: e.target.value } );
    }
    
    render(){
        return(
            <div>
                <form className="search-form" onSubmit={ this.handleSubmit.bind(this) }>

                    {/** Ref references this <input> and sends the value to textInput */}
                    <input type="text"
                        ref={ this.textInput }
                        placeholder="Search"
                        name="search"
                        onChange={this.onInputType.bind(this)}
                    />

                    <button type="submit" className="search-button">

                        <Link to={{pathname: `/search/${this.state.inputValue}`}}>
                            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </Link>

                    </button>

                </form>
            </div>
        );
    }
}

export default SearchForm;
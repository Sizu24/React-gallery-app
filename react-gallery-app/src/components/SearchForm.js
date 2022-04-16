import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const SearchForm = (props)=>{

    // Variable to store ref data from input element inside the form
    const textInput = React.createRef();
    
    /*  useNavigate hook to navigate url to new path. 
        This needs to be initiated in the function component
     */
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        // Runs the searchGifs method in App.js, and sends it the value from the ref in the form
        props.searchResults(textInput.current.value);

        navigate(`/search/${textInput.current.value}`);
    }
    
    return(
        <div>
            <form className="search-form" onSubmit={ handleSubmit }>

                {/** Ref references this <input> and sends the value to textInput */}
                <input type="text" ref={ textInput } placeholder="Search" name="search" />

                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>

            </form>
            <NavBar />
        </div>
    );
}

export default SearchForm;
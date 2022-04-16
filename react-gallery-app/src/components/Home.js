import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Home = ()=>{
    
    return(
        <div className="home-container">
            <Link to="/search" element={<SearchForm />}><button className="home-button">Let's search some gifs!</button></Link>
        </div>
    );
}

export default Home;
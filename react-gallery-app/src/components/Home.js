import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';


const Home = ()=>{
    
    return(
        <Link to="/search" element={<SearchForm />}><button>Let's search some gifs!</button></Link>
    );
}

export default Home;
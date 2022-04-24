import React from 'react';
import ShowImages from './ShowImages';
import NoGifs from './NoGifs';
import SearchForm from './SearchForm';

const ImageContainer = props => {
    let results = props.imageList;
    let gifs = [];

    if(results.length > 0){
        gifs = results.map( gif =>(<ShowImages server={gif.server} id={gif.id} secret={gif.secret} key={gif.id} />));
    }else{
        gifs = <NoGifs />;
    }

    return (

        <div className="photo-container">
            <SearchForm searchResults={ props.searchResults }/>
            <h2>Results</h2>
            <ul>
                {
                    gifs
                }
            </ul>
        </div>
    );
}

export default ImageContainer;
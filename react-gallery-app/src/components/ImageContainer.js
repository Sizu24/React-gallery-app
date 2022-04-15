import React from 'react';
import ShowImages from './ShowImages';
import NoGifs from './NoGifs';

const ImageContainer = props => {
    let results = props.imageList;
    let gifs = [];

    if(results.length > 0){
        gifs = results.map( gif =>{
            <ShowImages server={gif.server} id={gif.id} secret={gif.secret} key={gif.id} />
        })
        console.log(gifs);
    }else{
        gifs = <NoGifs />
    }

    return (

        <div className="images-container">
                {console.log(gifs)}
            <ul>
                {
                    gifs
                }
            </ul>
        </div>


    );
}

export default ImageContainer;
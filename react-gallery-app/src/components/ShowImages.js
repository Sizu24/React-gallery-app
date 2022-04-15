import React from 'react';

// displayUrl = `https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg`;

const ShowImages = props => {
    return(
        <li>
            <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_w.jpg`}
                className="gif-image"
                alt=""
            />
        </li>
    )


}

export default ShowImages;
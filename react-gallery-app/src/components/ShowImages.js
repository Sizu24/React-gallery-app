import React from 'react';

const ShowImages = props => {
    return(
        <li>
            <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_w.jpg`} alt="" />
        </li>
    )


}

export default ShowImages;
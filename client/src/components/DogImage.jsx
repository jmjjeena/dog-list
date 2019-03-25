import React from 'react';
import Image from './Image.jsx'

var DogImage = function(props) {
  return (
    <div className = "image-holder">
      <div className="image-holder-details">
        <img src={props.src}/>
      </div>
    </div>
  )
}

export default DogImage;

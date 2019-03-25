import React from 'react';
import Image from './Image.jsx'

var DogImage = function(props) {
  return (
    <div className = "image-holder">
      <div className="image-holder-details">
        {props.images.map((dog, i) => {
          <Image
            className = "image"
            key= {i}
            image={dog.image}/>
        })}
      </div>
        {/* <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"></img> */}
    </div>
  )
}

export default DogImage;

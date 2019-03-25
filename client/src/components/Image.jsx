import React from 'react';

var Image = function(props) {
  return(
    <div>
      <h3>Dog Image</h3>
      <img src={props.image} alt=""/>
    </div>
  )
}

export default Image;

import React from 'react';

const ImageDisplay = ({transformations}) => {
  var transform = "";
  var opacity = 1;

  for (var key in transformations) {
    if (transformations[key]) {
      if (key === "opacity(.5)") {
        opacity = .5;
      }
      else {
        transform = transform + " " + key;
      }
    }
  }

  return (
    <div className="image-holder">
      <img id="image-display" src="http://placehold.it/350?text=Image"
           alt=""
           style={{transform: transform, opacity: opacity}}/>
    </div>
  );
}

export default ImageDisplay;

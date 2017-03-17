import React from 'react';

const ImageInput = () => {

  const displayImage = () => {
    var preview = document.getElementById('image-display');
    var file    = document.getElementById('image-input').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", () => {
      preview.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="button">
      <label htmlFor="image-input" className="custom-image-input">
        Choose Image
      </label>
      <input type="file" id="image-input" accept="image/*" onChange={ displayImage } />
    </div>
  );
}

export default ImageInput;

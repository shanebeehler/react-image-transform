import React        from 'react';
import ImageInput   from './image_input';
import ImageDisplay from './image_display';
import                   '../styles/image_container.css';

const ImageContainer = ({ transformations }) => {

  return (
    <div className="image-container" >
      <p>for alignment</p>
      <ImageDisplay transformations={transformations}/>
      <ImageInput />
    </div>
  );
}

export default ImageContainer;

import React, { useState } from 'react';

const ClickableImage = ({ src, price }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick}>
      {isClicked ? (
        <div className='round-div'><span>{ price }</span></div>
      ) : (
        <img
          className='clickable-image'
          src={src} 
          alt="error al cargar imagen" 
        />
      )}
    </div>
  );
};

export default ClickableImage;
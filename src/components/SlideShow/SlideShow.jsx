import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import img1 from './../../assets/images/img1.jpeg';
import img2 from './../../assets/images/img2.jpeg';
import img3 from './../../assets/images/img3.jpeg';
import img4 from './../../assets/images/img4.jpeg';
import img5 from './../../assets/images/img5.jpeg';
import img6 from './../../assets/images/img6.jpeg';
import img7 from './../../assets/images/img7.jpeg';
import img8 from './../../assets/images/img8.jpeg';
import img9 from './../../assets/images/img9.jpeg';
import img10 from './../../assets/images/img10.jpeg';
import img11 from './../../assets/images/img11.jpeg';
import img12 from './../../assets/images/img12.jpeg';
import img13 from './../../assets/images/img13.jpeg';


const Slideshow = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        marginBottom: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src={images[currentImage]}
        alt={`slide-${currentImage}`}
        style={{ width: '100%', height: 'auto', maxWidth: '1024px' }}
      />
    </Box>
  );
};

export default Slideshow;

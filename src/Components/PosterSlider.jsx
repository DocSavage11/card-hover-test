import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'


function PosterSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default PosterSlider
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Imgs({ props }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause= {'hover'}>
      {props.map((el, index) => {
        return (
          <Carousel.Item interval={700} key={index}>
            <img style={{height: '90%', width:'100%', borderRadius:'50px 50px 50px 0 ', borderBottom:'2px solid var(--dark-orange)' }}src={el.img} alt={el.caption} />
              </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

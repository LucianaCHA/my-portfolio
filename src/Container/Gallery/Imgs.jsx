import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Imgs({ props }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause= {"hover"}>
      {props.map((el, index) => {
        return (
          <Carousel.Item>
            <img style={{height: '200px', width:'100%' }}src={el.img} alt={el.caption} />
              </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

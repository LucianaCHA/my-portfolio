import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Imgs({ props }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.map((el, index) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={el.img} alt={el.caption} />
            <Carousel.Caption>
              <h5>{el.caption}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

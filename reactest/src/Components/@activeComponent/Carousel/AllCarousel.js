import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';


function AllCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} slide={false} fade>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>




    );
}

export default AllCarousel;

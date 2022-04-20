import React from 'react';
import image1 from '../Image/1.jpg';
import image2 from '../Image/2.jpg';
import image3 from '../Image/3.jpg';
import { Carousel } from 'react-bootstrap';

const CarouselPoke = () =>  {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={image1} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={image3} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselPoke;
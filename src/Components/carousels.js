import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image1 from '../Imgs/engineering.jpg'
import Image2 from '../Imgs/leadership.jpg'
import Image3 from '../Imgs/programming.jpg'
import Image4 from '../Imgs/studying.jpg'

export default function Carousels() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Biomedical Engineer</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Leader</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Programmer</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h1>Learner</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
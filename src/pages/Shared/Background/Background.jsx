import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg from '../../../assets/bg.png';
import Button from 'react-bootstrap/Button';

const Background = () => {
  return (
    <div className='mt-3'>
      <Carousel>
        <Carousel.Item>
          <img src={bg} alt="" />
          <Carousel.Caption>
            <h3>Create an Amazing Newspaper</h3>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant="danger">Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Background;

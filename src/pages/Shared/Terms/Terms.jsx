import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <Container>
      <p>Accept Term & Conditions</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae obcaecati suscipit praesentium quis qui nemo facere iure dolore quos, voluptas iste nam, et in eveniet pariatur fugiat labore accusamus rem molestias consectetur maxime minus enim eos! Est iusto nihil ab maiores nulla ratione in illo rem, laborum corporis praesentium sed molestias quod soluta totam ullam. Ipsum totam optio officia velit voluptates. Harum sequi quibusdam quae fuga tenetur, aliquam odit?</p>
      <p>Go back to <Link to='/register'>Register</Link> </p>
    </Container>
  );
};

export default Terms;
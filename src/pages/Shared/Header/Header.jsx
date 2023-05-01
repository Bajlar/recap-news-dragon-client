import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';

const Header = () => {

  return (
    <Container>
      <div className='text-center'>
        <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className='d-flex mt-3'>
        <Button variant="danger">Danger</Button>
        <Marquee className='text-danger' speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
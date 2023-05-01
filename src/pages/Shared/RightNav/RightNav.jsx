import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import Background from '../Background/Background';

const RightNav = () => {
  return (
    <div>
      <div>
        <h2>Login with</h2>
        <Button className='mb-3 text-primary' variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google</Button>
        <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
      </div>
      <div className='mt-3'>
        <h2>Find Us On</h2>
        <ListGroup>
          <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className='text-primary'></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
         </ListGroup>
      </div>
      <div className="mt-3 py-4">
        <QZone></QZone>
        <Background></Background>
      </div>
    </div>
  );
};

export default RightNav;
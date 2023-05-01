import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);

  return (
    <Container className="my-4">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-4">
              <Link className='text-decoration-none fw-semibold' to='/'>Home</Link>
              <Link className='text-decoration-none fw-semibold' to='/about'>About</Link>
              <Link className='text-decoration-none fw-semibold' to='/career'>Career</Link>
            </Nav>
            <Nav className='d-flex align-items-center'>
              <div>
                {user && <FaUserAlt className='text-dark' style={{fontSize: '2rem'}}></FaUserAlt>}
              </div>
              <div className='ms-3'>
                {user ? <Button variant="dark">Logout</Button> :
                <Link to='/login'><Button variant="dark">Login</Button></Link>
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
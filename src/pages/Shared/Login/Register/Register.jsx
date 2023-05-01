import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container className='w-50 mx-auto'>
      <h2 className='text-center mb-4'>Register your account</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Enter your photo url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter your password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Term & Conditions" />
        </Form.Group>

        <Button className='w-full' variant="dark" type="submit">
          Register
        </Button>

        <Form.Group className="mt-3">
          <p>Already Have An Account ? <Link to='/login'>Login</Link></p>
        </Form.Group>

        <Form.Text className='text-success'>

        </Form.Text>
        <Form.Text className='text-danger'>

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
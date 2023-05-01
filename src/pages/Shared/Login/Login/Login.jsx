import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container className='w-50 mx-auto'>
      <h2 className='text-center mb-4'>Login your account</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter your password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className='w-full' variant="dark" type="submit">
          Login
        </Button>

        <Form.Group className="mt-3">
          <p>Dont’t Have An Account ? <Link to='/register'>Register</Link></p>
        </Form.Group>

        <Form.Text className='text-success'>

        </Form.Text>
        <Form.Text className='text-danger'>

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProviders';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/category/0'

  const handleLogin = event => {
    event.preventDefault();

    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <Container className='w-50 mx-auto'>
      <h2 className='text-center mb-4'>Login your account</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter your password" />
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
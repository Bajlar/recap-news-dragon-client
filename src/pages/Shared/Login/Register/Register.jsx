import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProviders';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = event => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password =from.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        from.reset();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }

  return (
    <Container className='w-50 mx-auto'>
      <h2 className='text-center mb-4'>Register your account</h2>
      <Form onSubmit={handleRegister}>
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
          <Form.Check 
            onClick={handleAccepted}
            type="checkbox" 
            name="accept"
            label={<>Accept <Link to='/terms'>Term and Conditions</Link></>} />
        </Form.Group>

        <Button className='w-full' disabled={!accepted} variant="dark" type="submit">
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
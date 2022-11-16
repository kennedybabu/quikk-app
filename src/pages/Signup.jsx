import React from 'react'
import Container  from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    


  return (
    <Container className='auth-wrapper'>
        <h3>sign up</h3>
        <div>
            <Form className='form-wrapper'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label><br/>
                    <Form.Control type="email" placeholder="Enter email" />                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>username</Form.Label><br/>
                    <Form.Control type="text" placeholder="Enter username" />                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone no.</Form.Label><br/>
                    <Form.Control type="number" placeholder="Enter Phone no." />                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label><br/>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label><br/>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="btn btn--signup" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    </Container>
  )
}

export default Signup
// import React from 'react';

import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';


import React from 'react'

const Login = () => {
  return (
    
    <div className='wrapper'>

           <div className='welcome'>
            <div className='image'>
                <h2>Welcome</h2>
            </div>
        
                <p>Lorem ipsum lipsum as it is
                    sometimes known, is dummy <br />
                    text used in laying out print
                </p>

            </div> 
            <div className='Form-login'>
                <div>
                    <h2>LOGIN</h2>
                </div>
                <Form className='login'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="Login">Login</Button>

                    <div>
                        <Form.Text id = "Dont have an account?">
                        <Button variant="primary" type="Sign up"></Button>
                        </Form.Text>
                    </div>
                    </Form>
            </div>
              
          
    </div>
  )
}

export default Login










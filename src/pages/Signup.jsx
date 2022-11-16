import React, {useState} from 'react'
import Container  from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const {user, signUp} = UserAuth()
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
    //   try {
    //     await signUp(email,password)
    //     navigate('/')
    //   } catch (error) {
    //     console.log(error)
    //   }
    }
    


  return (
    <Container className='auth-wrapper'>
        <h3>sign up</h3>
        <div>
            <Form className='form-wrapper' onSubmit={handleSubmit}>
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
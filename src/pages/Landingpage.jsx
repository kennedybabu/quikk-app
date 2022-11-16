import React from 'react'
import  Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {BsArrowRightCircle} from 'react-icons/bs'
const Landingpage = () => {
  return (
    <Container className='landing'>
        <h2>quikk money sending...</h2>
        <div className="overlay"></div>       
        <Button className='btn btn--landing'>Get started <BsArrowRightCircle /></Button>{' '} 
    </Container>
  )
}

export default Landingpage
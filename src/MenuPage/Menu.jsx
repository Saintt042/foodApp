import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Container } from './MenuStyle'

const Menu = () => {
  return (
    <Container>
       <h1> SUSHI FOOD </h1>
       <Navbar />
        <Footer />
    </Container>
  )
}

export default Menu
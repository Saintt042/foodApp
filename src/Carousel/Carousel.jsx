import React from 'react'
import { Container } from './CarouselStyle'

function Carousel({ pictures }) {
  return (
    <Container>
       <div className="carousell">
       <div className="wrapper">
       {pictures.map((picture, index) => {
           return (
           <div key={index} className='card'>
           <img src={picture.picture} alt="" />
           </div>
           );
        })}
       </div>
       </div>
    </Container>
  );
}

export default Carousel
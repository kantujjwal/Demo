import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
   return (
      <>
         <div className='text-center py-2 footer' style={{ backgroundColor: '#172337' }}>
            <Container>
               <b style={{ color: 'white' }}>Footer</b>
            </Container>
         </div>
      </>
   )
}

export default Footer
import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Product from '../../../Services/Product'

function Home() {
   return (
      <div>
         <Container>

            <Product />

         </Container>
      </div>
   )
}

export default Home
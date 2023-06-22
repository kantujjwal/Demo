import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Product from '../../../Services/Product'
import MensClothing from '../../../Services/MensClothing'
// import Grid from '../../../Services/Grid'

function Home() {
   return (
      <div>
         <Container>

            <Product />
            <MensClothing />
            {/* <Grid /> */}

         </Container>
      </div>
   )
}

export default Home
import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Axios from '../../../Services/Axios'

function Home() {
   return (
      <div>
         <Container>
            <Card>
               <Axios />
            </Card>
         </Container>
      </div>
   )
}

export default Home
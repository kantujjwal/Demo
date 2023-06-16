import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs'
import ReadMoreReact from 'read-more-react';
const Axios = () => {
   const [person, setPerson] = useState([])
   // const [name, setName] = useState([])
   useEffect(() => {
      axios.get(`https://fakestoreapi.com/products`)
         .then(res => {
            console.log('res', res)
            setPerson(res.data);
         })
         .catch(err => console.log(err));
   }, [])
   return (
      <>
         <Container>
            <Row className='p-1' lg={12} md={8} sm={4} >
               {person.map((item) => (
                  <Col className='card_height' lg={4}>
                     <Card className='p-3'>
                        <span className='p-1 title'>
                           <b>
                              {item.title}
                           </b>
                        </span>
                        <span className='p-1'>
                           <img className='img' src={item.image} alt="" />
                        </span>
                        <span>
                           <h6><b>Price :</b> {item.price} $</h6>
                        </span>
                        <div>
                           <BsFillCartPlusFill />
                        </div>
                        <div>
                           {/* <h6>{item.category}</h6> */}
                           <span style={{ cursor: 'pointer' }}>
                              <ReadMoreReact text={item.description}
                                 min={50}
                                 ideal={60}
                                 max={80}
                                 readMoreText="...read more" />
                              {/* {item.description} */}
                           </span>
                        </div>
                     </Card>
                  </Col>
               ))}
            </Row>
         </Container>
      </>
   )
}

export default Axios
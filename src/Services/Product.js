import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs'
import ReadMoreReact from 'read-more-react';
import Cart from '../Pages/Login/Home/Cart';
const Product = () => {
   const [person, setPerson] = useState([])
   // const [name, setName] = useState([])


   const handelOnClick = (item) => {


      const items = JSON.parse(localStorage.getItem('items'));
      // console.log('templateItem', templateItem)
      localStorage.setItem('items', JSON.stringify([...items, item]));
      // localStorage.getItem('...productInfo, item');
      // console.log('productInfo', ...productInfo, item)
   }


   useEffect(() => {
      axios.get(`https://fakestoreapi.com/products`)
         .then(res => {
            // console.log('res', res)
            setPerson(res.data);
         })
         .catch(err => console.log(err));
   }, [])
   // console.log('productInfo', productInfo)

   return (
      <div className='  pt-3 pb-3'>
         <Container className='mt-5 pt-5 pb-5'>
            <Row className='p-1' lg={12} md={8} sm={3} >
               {person.map((item) => (
                  <Col className='' lg={3} md={4} sm={3}>
                     <Card className=' p-2 pb-2 card_height '>
                        <div className='p-1 title'>
                           {/* <ReadMoreReact text={item.title}
                              min={5}
                              ideal={7}
                              max={9} /> */}
                           <b>
                              {item.title}
                           </b>
                        </div>
                        <div className='p-1 image_div'>
                           <img className='imgage' src={item.image} alt="" />
                        </div>
                        <div className='d-flex justify-content-between'>
                           <div className='title'>
                              Category : {item.category}
                           </div>
                           <div>
                              <AiFillStar style={{ color: 'gold' }} />
                              &nbsp;
                              {item.rating.rate}
                           </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                           <div>
                              <b>Price :</b> {item.price} $
                           </div>
                           {/* <div>
                              <BsFillCartPlusFill />
                           </div> */}
                        </div>
                        {/* <div style={{ cursor: 'pointer' }}>
                           <ReadMoreReact text={item.description}
                              min={50}
                              ideal={60}
                              max={80}
                              readMoreText="...read more" />
                        </div> */}
                        <button
                           type="button"
                           class="btn btn-success"
                           onClick={() => handelOnClick(item)}
                        >
                           <BsFillCartPlusFill />&nbsp;|
                           Add to Cart
                        </button>
                     </Card>
                  </Col>
               ))}
            </Row>

         </Container>
      </div>
   )
}

export default Product
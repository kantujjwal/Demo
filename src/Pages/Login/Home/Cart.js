import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AiFillCloseCircle, AiFillStar } from 'react-icons/ai';
import { BsFillCartDashFill } from 'react-icons/bs'

const Cart = () => {
   const [cartValue, setCartValue] = useState([]);

   useEffect(() => {
      const items = JSON.parse(localStorage.getItem('items'));
      console.log('items', items)
      if (items) {
         setCartValue(items);
      }
   }, []);
   // console.log('cartValue', cartValue)
   const handelOnClick = (item) => {
      console.log('item', item.id)
      const data = cartValue.filter(el => el.id !== item.id)
      setCartValue(data)
      localStorage.setItem('items', JSON.stringify([...data]));
   }
   return (
      <>
         <div className='  pt-3 pb-3'>
            <Container className='mt-5 pt-5 pb-5'>
               <Row className='p-1 ' lg={12} md={8} sm={3}>
                  {cartValue.map((item) => (
                     <Col sm={12} >
                        <div className=' d-flex m-1 col-12 justify-content-between'>
                           <div className='p-1 cart_image_div col-1'>
                              <img className='cart_imgage' src={item.image} alt="" />
                           </div>
                           &nbsp;
                           <div className='card_title col-4'>
                              {item.title}
                           </div>
                           &nbsp;
                           <div className='card_title col-3' style={{ color: 'black' }}>
                              {item.category}
                           </div>
                           &nbsp;
                           <div className='col-2'>
                              <b>Price :</b> {item.price} $
                           </div>
                           <div className='text-danger' style={{ fontSize: '27px', display: 'center' }}
                           >
                              <AiFillCloseCircle
                                 style={{ cursor: 'pointer' }}
                                 onClick={() => handelOnClick(item)} />
                           </div>
                           {/* <button
                              type="button"
                              class="btn btn-success col-2"
                              onClick={() => handelOnClick(item)}
                              style={{ borderRadius: '40px' }}
                           >
                              <BsFillCartDashFill />
                              &nbsp;|
                              Remove
                           </button> */}
                        </div>
                     </Col>
                  ))}
               </Row>
            </Container>
         </div>
      </>
   )
}

export default Cart
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

   // 👇️ if you only need to capitalize the first letter
   // const capitalizeFirst = (str) => {
   //    return str.charAt(0).toUpperCase() + str.slice(1);
   // };

   // State to store count value
   const [count, setCount] = useState(0);

   // Function to increment count by 1
   const incrementCount = () => {
      // Update state with incremented value
      setCount(count + 1);
   };

   const dcrementCount = () => {
      // Update state with incremented value
      if (count == 0) {
         return
      }
      setCount(count - 1);
   };

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
                           <div className='card_title col-4 mt-2'>
                              {item.title}
                           </div>
                           &nbsp;
                           <div className='card_title col-2 mt-2' style={{ color: 'black' }}>
                              {/* {capitalizeFirst(item.category)} */}
                              (item.category)
                           </div>
                           &nbsp;
                           <div className='col-2 mt-2'>
                              <b>Price :</b> {item.price} $
                           </div>
                           <div className='d-flex col-2 mt-2'>
                              <div className='plus-minus'>
                                 <button
                                    type="submit"
                                    onClick={dcrementCount} >-</button>
                              </div>
                              &nbsp;
                              <div className='plus-minus-text'>
                                 <input
                                    value={count}
                                 />
                              </div>
                              &nbsp;
                              <div className='plus-minus'>
                                 <button
                                    type="submit"
                                    onClick={incrementCount} >+</button>
                              </div>
                           </div>
                           <div className='text-danger col-1' style={{ fontSize: '27px', display: 'center' }}
                           >
                              <AiFillCloseCircle
                                 className='mb-1'
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
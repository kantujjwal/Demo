import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs'
import ReadMoreReact from 'read-more-react';
import Cart from '../Pages/Login/Home/Cart';
import { BsFillLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs';

const Product = () => {
   const [person, setPerson] = useState([])
   // const [name, setName] = useState([])
   const [cartItems, setCartItems] = ([])


   var numbers = [1, 2, 3, 4, 5];

   const updatedNums = numbers.map((number) => {
      return (number + 2);
   });

   console.log(updatedNums);

   const handelOnClick = (item) => {
      console.log('item', item)
      localStorage.setItem('key', '[...cartItems, item]');
   }

   // const handelOnClick = (item) => {
   //    setCartItems([...cartItems, item])
   //    // console.log('item', item)
   //    // const items = JSON.parse(localStorage.getItem('item'));

   //    const items = JSON.parse(localStorage.getItem('items'));
   //    // console.log('templateItem', templateItem)
   //    localStorage.setItem('items', JSON.stringify([...items, item]));
   //    // localStorage.getItem('...productInfo, item');
   //    // console.log('productInfo', ...productInfo, item)
   // }


   useEffect(() => {
      axios.get(`https://fakestoreapi.com/products`)
         .then(res => {
            // console.log('res', res)
            setPerson(res.data);
         })
         .catch(err => console.log(err));
   }, [])
   // console.log('productInfo', productInfo)


   // Declared an array of items
   const names = [
      'Ujjwal',
      'Ripon',
      'Abhishek',
      'Rudranil',
      'Saurav'
   ];

   // Some styling for the items
   const nameStyles = {
      backgroundColor: 'white',
      width: '100px',
      marginBottom: '10px',
      padding: '10px',
      color: 'green',
      boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
      marginRight: '5px'
   };
   const textStyles = {
      backgroundColor: 'white',
      width: '1000px',
      marginBottom: '10px',
      padding: '10px',
      color: 'green',
      boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
      marginRight: '5px',
      cursor: 'no-drop'
   };
   const onChangeStyle = {
      width: '200px',
      marginBottom: '10px',
      padding: '10px',
      borderRadius: '5px'
   }

   const onInputChange = (event) => {
      console.log(event.target.value)
   }
   const [state, setState] = useState([])
   // const state = { inputValue: '' };

   const [click, setClick] = useState(0)
   const [oddEven, setOddEven] = useState(0)

   const bulbOn = {
      color: 'red'
   }

   return (
      <div className='  pt-3 pb-3'>
         <Container className='mt-5 pt-5 pb-5'>
            <Row className='p-1' lg={12} md={8} sm={3} >
               {person.map((item) => (
                  <Col className='' lg={3} md={4} sm={3}>
                     <Card className=' p-2 pb-2 card_height '>
                        <div className='p-1 title'>
                           {/* <ReadMoreReact text={item.title} min={5} ideal={7} max={9} /> */}
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
            <div className='d-flex pt-3'>
               {
                  /*  This maps each array item to a div adds
                  the style declared above and return it */
                  names.map(name => <div key={name}
                     style={nameStyles}>{name}</div>)
               }
            </div>
            <div className='d-flex pt-3'>
               <form>
                  <label>Enter text</label>
                  &nbsp;
                  <input type="text"
                     style={onChangeStyle}
                     onChange={onInputChange} />
               </form>
            </div>

            <div className='pt-3'>
               <form>
                  <label> Enter text </label>
                  &nbsp;
                  <input type="text"
                     value={state.inputValue}
                     style={onChangeStyle}
                     onChange={(e) => setState(
                        {
                           inputValue: e.target.value,
                           inputValue1: "Entered Value: " + e.target.value
                        })} />
               </form>
               <br />
               <div>
                  <textarea
                     style={textStyles}
                     name=""
                     cols="30"
                     rows="10"
                     // defaultValue={'Entered Value:'}
                     value={state.inputValue1}
                     disabled
                  >
                     Entered Value:
                  </textarea>
                  <div>Entered Value: {state.inputValue}</div>
               </div>
            </div>
            <br />

            <div>
               <p>You clicked {click} times</p>

               <button onClick={() => setClick(click + 1)}>
                  Click me
               </button>
            </div>
            <br />

            <div>
               {/* <p>You've clicked {oddEven} times!</p> */}

               <p>The number of times you have clicked
                  is {oddEven % 2 == 0 ? 'even!' : 'odd!'}</p>

               <p>Bulb is {oddEven % 2 == 0 ? <BsLightbulbFill style={bulbOn} /> : <BsFillLightbulbOffFill />}
                  {oddEven % 2 == 0 ? 'On' : 'OFF'}</p>

               <button
                  className='btn'
                  onClick={() => setOddEven(oddEven + 1)}
                  style={{ backgroundColor: oddEven % 2 == 0 ? "red" : "black" }}
               >
                  {oddEven % 2 == 0 ? `On` : `OFF `}
               </button>
            </div>
         </Container>
      </div>


   )
}

export default Product
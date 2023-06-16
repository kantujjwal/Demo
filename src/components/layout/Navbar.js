import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { SiFlipkart } from 'react-icons/si'
import Login from '../../Login';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
   const navigate = useNavigate()
   const [showLogin, setShowLogin] = useState(false);
   return (
      <>
         <div className='br_c py-2 ' style={{ backgroundColor: '#2874F0' }}>
            <Container
            // className='br_b'
            >
               <div className='d-flex justify-content-between navbar' >
                  <div style={{ height: '2 rem' }}>
                     {/* <BiLogoAmazon /> */}
                     <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                        <SiFlipkart style={{ color: 'yellow', height: '20px' }} />
                        &nbsp;
                        Flipkart</a>

                  </div>
                  <div>
                     {/* <a href="/">Login</a> */}
                     <button
                        className='p-1 login_Btn'
                        onClick={() => navigate("/Login")}
                     >
                        Login
                     </button>
                     &nbsp;
                     <button
                        className='p-1 cart_icon'
                     >
                        <AiOutlineShoppingCart /> Cart
                     </button>

                  </div>

               </div>
            </Container>
         </div>

      </>
   )
}

export default Navbar
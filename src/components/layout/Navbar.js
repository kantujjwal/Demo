import React, { useEffect, useState } from 'react'
import { Container, Toast } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { SiFlipkart } from 'react-icons/si'
import Login from '../../Login';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
   const navigate = useNavigate()
   const [showLogin, setShowLogin] = useState(false);
   const [scrollTop, setScrollTop] = useState(0);


   useEffect(() => {
      const handleScroll = (event) => {
         setScrollTop(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <>
         <div className='br_c py-2 navbar_container' style={{ backgroundColor: '#2874F0' }}>
            <Container
            // className='br_b'
            >
               <div className='d-flex justify-content-between navbar' >
                  <div style={{ height: '1.6 rem' }}>
                     {/* <BiLogoAmazon /> */}
                     {/* <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                        <SiFlipkart style={{ color: 'yellow', height: '20px' }} />
                        &nbsp;
                        Flipkart</a> */}
                     <a href="/">
                        <img
                           style={{ height: '2rem' }}
                           src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                           alt="Flipkart"
                        />
                     </a>

                  </div>
                  <div>
                     {/* <a href="/">Login</a> */}
                     <button
                        type='submit'
                        className='btn login_Btn btn-light btn-block btn-outline-primary'
                        onClick={() => navigate("/Login")}
                     >
                        Login
                     </button>
                     &nbsp;
                     <button
                        className='p-1 cart_icon'
                        onClick={() => navigate('/Cart')}
                     >
                        <AiOutlineShoppingCart /> Cart
                     </button>

                  </div>

               </div>

               {scrollTop > 40 ? (
                  <div className="sub_tabs w-100 py-10">
                     <ul
                        className="d-flex justify-content-between li_style mb-0"
                        style={{
                           paddingLeft: "0px",
                           overflowX: "auto",
                           whiteSpace: "nowrap",
                           marginRight: "1px",
                           cursor: "pointer",
                        }}
                     >
                        <li className="li_hov">Men's Clothing</li>
                        <li className="li_hov ">Jewelery</li>
                        <li className="li_hov">Electronics</li>
                        <li className="li_hov">Women's clothing</li>
                        <li className="li_hov">Kids</li>
                        <li className="li_hov">Foot wear</li>
                        <li className="li_hov">Grocery</li>
                        <li className="li_hov">Home & Furniture</li>
                     </ul>
                  </div>
               ) : null}
            </Container>
         </div>

      </>
   )
}

export default Navbar
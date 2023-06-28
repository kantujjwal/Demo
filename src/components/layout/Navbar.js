import React, { useEffect, useState } from 'react'
import { Container, Toast } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { SiFlipkart } from 'react-icons/si'
import { useNavigate } from 'react-router-dom';
import { Switch } from 'antd';




const Navbar = () => {
   const navigate = useNavigate()
   const [showLogin, setShowLogin] = useState(false);
   const [scrollTop, setScrollTop] = useState(0);
   const [theme, setTheme] = useState('false');
   const [themes, setThemes] = useState('default-theme');

   const changeTheme = () => {
      setThemes(prevTheme => prevTheme === 'default-theme' ? 'alternate-theme' : 'default-theme');

   };

   // useEffect(() => {
   //    const handleScroll = (event) => {
   //       setScrollTop(window.scrollY);
   //    };

   //    window.addEventListener("scroll", handleScroll);

   //    return () => {
   //       window.removeEventListener("scroll", handleScroll);
   //    };
   // }, []);

   const onChange = (checked) => {
      // console.log(`switch to ${checked}`);
      localStorage.setItem('theme', checked);
      // localStorage.getItem('theme', checked)
      // setTheme(localStorage.getItem( checked))
      const newTheme = theme === 'false' ? 'true' : 'false';
      // setTheme(newTheme);
      // toggleTheme();
   };

   // useEffect(() => {
   //    const newTheme = localStorage.getItem('checked');
   //    console.log('checkedth', checked)
   //    if (newTheme) {
   //       setTheme(newTheme);
   //    }
   // }, []);

   // const toggleTheme = (checked) => {
   //    localStorage.getItem('theme', checked)
   //    const newTheme = theme === 'false' ? 'true' : 'false';
   //    setTheme(newTheme);
   // }

   const themeStyles = {
      false: {
         backgroundColor: 'white',
         color: 'black',
      },
      true: {
         backgroundColor: 'black',
         color: 'white',
      },
   }

   // const handleThemeChange = () => {
   //    const isCurrentDark = theme === 'dark';
   //    setTheme(isCurrentDark ? 'light' : 'dark');
   // };

   const items = JSON.parse(localStorage.getItem('items'));

   return (
      <>
         <div className={` d-flex br_c py-2 navbar_container app ${themes} `}
         // style={{ backgroundColor: '#2874F0' }}
         // style={themeStyles}
         >
            &nbsp;
            <Switch className='mt-3'
               onClick={changeTheme}
               onChange={onChange}
            />
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
                     <input
                        type="search"
                        name=""
                        id=""
                        placeholder='Search'
                        style={themeStyles}
                     />
                  </div>
                  <div>
                     <button
                        type='submit'
                        className='btn login_Btn btn-light btn-block btn-outline-primary'
                        onClick={() => navigate("/Login")}
                     >
                        Login
                     </button>
                     &nbsp;
                     <button
                        className='p-1 btn btn-block login_Btn btn-outline-primary btn-light'
                        // cart_icon
                        onClick={() => navigate('/Cart')}
                     >
                        <AiOutlineShoppingCart /> Cart
                     </button> {' '}
                     
                     <button
                        type='submit'
                        className='btn login_Btn btn-light btn-block btn-outline-primary'
                        onClick={() => navigate("/SignUp")}
                     >
                        Sign Up
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
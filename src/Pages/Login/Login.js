
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
function Login() {
   const [formData, setFromData] = useState({
      userName: "",
      password: "",
      fullName: ""
   })
   const submitFrom = (e) => {
      e.preventDefault()
      console.log('formData', formData)
   }


   const handelOnchange = (e) => {
      setFromData({ ...formData, [e.target.name]: e.target.value })
      console.log('e', e.target.value)
   }
   return (
      <>
         <Container className='p-3 center'>
            <div className='loginCenter'>
               <Form autocomplete="off" onSubmit={(e) => submitFrom(e)}>
                  <Row className='p-3'>
                     <Col className=' m-0'>
                        <input onChange={(e) => handelOnchange(e)} name='fullName'
                           style={{ width: '60%' }}
                           type="text"
                           placeholder='Full Name' />
                     </Col>
                  </Row>
                  <Row className='p-3'>
                     <Col className=' m-0'>
                        <input onChange={(e) => handelOnchange(e)}
                           name='userName'
                           style={{ width: '60%' }}
                           type="username"
                           placeholder='User Name'
                        />
                     </Col>
                     <Col className='m-0 '>
                        <input onChange={(e) => handelOnchange(e)} name='password'
                           style={{ width: '60%' }}
                           type="password"
                           placeholder='Password'
                           autocomplete="new-password"
                        />
                     </Col>
                     <Col className='btnCenter' style={{}}>
                        <button
                           type='submit'
                        >
                           Login
                        </button>
                     </Col>
                  </Row>
               </Form>
            </div>
         </Container>
      </>
   )
}

export default Login
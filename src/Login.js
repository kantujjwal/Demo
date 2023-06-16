
import React, { useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
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
         <Container className='p-2 '>
            <div className='center text-center' style={{}}>
               <Card className=''>
                  <div className='loginCenter'>
                     <Form autocomplete="off" onSubmit={(e) => submitFrom(e)}>
                        <Row className='p-3'>
                           <Col className='p-3'>
                              <input onChange={(e) => handelOnchange(e)} name='fullName'
                                 style={{ width: '60%' }}
                                 type="text"
                                 placeholder='Full Name' />
                           </Col>
                        </Row>
                        <Col className='p-3'>
                           <input onChange={(e) => handelOnchange(e)} name='userName' style={{ width: '60%' }}
                              type="username"
                              placeholder='User Name' />
                        </Col>
                        <Col className='p-3'>
                           <input onChange={(e) => handelOnchange(e)} name='password'

                              style={{ width: '60%' }}
                              type="password"
                              placeholder='Password' autocomplete="new-password" />
                        </Col>
                        <Col className='btnCenter' style={{}}>
                           <button type='submit'
                           >
                              Login
                           </button>
                        </Col>
                     </Form>
                  </div>
               </Card>
            </div>
         </Container>
      </>
   )
}

export default Login
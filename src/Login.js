
import React, { useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { AiFillFacebook, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
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
         <div className='pt-3'>
            <Container className=' mt-5 pt-5 '>
               <form className='loginCenter' onSubmit={(e) => submitFrom(e)}>

                  <div class="form-outline mb-4">
                     <label class="form-label" for="form2Example1">Email address</label>
                     <input onChange={(e) => handelOnchange(e)} type="email" id="form2Example1" class="form-control" />
                  </div>

                  <div class="form-outline mb-4">
                     <label class="form-label" for="form2Example2">Password</label>
                     <input onChange={(e) => handelOnchange(e)} type="password" id="form2Example2" class="form-control" />
                  </div>

                  <div class="row mb-4">
                     <div class="col d-flex justify-content-center">

                        <div class="form-check">
                           <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                           <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                     </div>

                     <div class="col">

                        <a href="#!">Forgot password?</a>
                     </div>
                  </div>

                  <button
                     type="submit"
                     class="btn btn-primary btn-block mb-4"
                  >
                     Sign in
                  </button>

                  <div class="text-center">
                     <p>Not a member? <a href="#!">Register</a></p>
                     <div className='d-flex text-center'>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link  btn-floating mx-1">
                           <i class="fab fa-facebook-f">
                              <AiFillFacebook />
                           </i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                           <i class="fab fa-google">
                              <FcGoogle />
                           </i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                           <i class="fab fa-twitter">
                              <AiFillTwitterCircle />
                           </i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                           <i class="fab fa-github">
                              <AiFillGithub />
                           </i>
                        </button>
                     </div>
                  </div>
               </form>
            </Container>
         </div>
         {/* <div className='pt-3'>
            <Container className=' mt-5 pt-5 '>
               <div className='text-center' style={{}}>
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
         </div> */}
      </>
   )
}

export default Login
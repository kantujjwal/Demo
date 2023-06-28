import { ErrorMessage, Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const FormikForm = () => {


   const [formikData, setFromikData] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      country: '',
      zipcode: ''
   })

   const submitFromikForm = (values) => {
      // values.preventDefault()
      console.log('formikData', formikData)
   }


   const handelOnchange = (values) => {
      setFromikData({ ...formikData, [values.target.name]: values.target.value })
      console.log('e', values.target.value)
   }

   const initialValues = {
      name: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      country: '',
      zipcode: ''
   };

   const validationForm = (values) => {
      const errors = {};

      if (!values.name) {
         errors.name = 'Name is required';
      }

      if (!values.email) {
         errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
         errors.email = 'Invalid email address';
      }

      if (!values.phone) {
         errors.phone = 'Phone is required';
      } else if (values.phone.min.length < 10) {
         errors.phone = 'Phone number must be 10 characters long';
      } else if (values.phone.max.length < 10) {
         errors.phone = 'Phone number must be 10 characters long';
      }

      return errors;
   };

   return (
      <>
         <div className='pt-3 pb-3'>
            <Container className='mt-5 pt-5 pb-5'>
               <h1 className="text-center mb-4">Formik Form</h1>
               <Formik
                  initialValues={initialValues}
                  onSubmit={(values) => submitFromikForm(values)}
                  validate={validationForm}
               >
                  {({ values, errors }) => (
                     <Form className='align-item-center'>
                        <Row className="my-4 col-sm-12  col-lg-6 ">
                           <Col sm={12} lg={12}>
                              <Form.Group className="">
                                 <Form.Label>
                                    Name: <span className="text-danger">*</span>{' '}
                                 </Form.Label>
                                 <Form.Control
                                    placeholder='Full Name'
                                    name='name'
                                    value={values.name}
                                    error={errors.name}
                                    onChange={(values) => handelOnchange(values)}
                                 />
                              </Form.Group>
                           </Col>

                           <Col sm={12} lg={12}>
                              <Form.Group className="">
                                 <Form.Label>
                                    E-mail: <span className="text-danger">*</span>{' '}
                                 </Form.Label>
                                 <Form.Control
                                    placeholder='E-mail'
                                    name='email'
                                    error={errors.email}
                                    onChange={(e) => handelOnchange(e)}
                                 />
                              </Form.Group>
                           </Col>

                           <Col sm={12} lg={12}>
                              <Form.Group className="">
                                 <Form.Label>
                                    Phone: <span className="text-danger">*</span>{' '}
                                 </Form.Label>
                                 <Form.Control
                                    placeholder='Phone Number'
                                    name='text'
                                    error={errors.phone}
                                    onChange={(e) => handelOnchange(e)}
                                 />
                              </Form.Group>
                           </Col>

                           <Col sm={12} lg={12}>
                              <Form.Group className="">
                                 <Form.Label>
                                    Address: <span className="text-danger">*</span>{' '}
                                 </Form.Label>
                                 <Form.Control
                                    placeholder='Address'
                                    name='text'
                                    error={errors.address}
                                    onChange={(e) => handelOnchange(e)}
                                 />
                              </Form.Group>
                           </Col>

                           <Col sm={12} lg={12}>
                              <Form.Group className="">
                                 <Form.Label>
                                    State: <span className="text-danger">*</span>{' '}
                                 </Form.Label>
                                 <Form.Control
                                    placeholder='State'
                                    name='text'
                                    error={errors.state}
                                    onChange={(e) => handelOnchange(e)}
                                 />
                              </Form.Group>
                           </Col>


                           <Col sm={12} lg={12}>
                              <Form.Group className="">
                                 <Form.Label>
                                    Country: <span className="text-danger">*</span>{' '}
                                 </Form.Label>
                                 <Form.Control
                                    placeholder='Country'
                                    name='text'
                                    error={errors.country}
                                    onChange={(e) => handelOnchange(e)}
                                 />
                              </Form.Group>
                           </Col>


                           <Col sm={12} lg={12}>
                              <Form.Group className="">
                                 <Form.Label>
                                    Zip Code: <span className="text-danger">*</span>{' '}
                                 </Form.Label>
                                 <Form.Control
                                    placeholder='Zip Code'
                                    name='text'
                                    error={errors.zipcode}
                                    onChange={(e) => handelOnchange(e)}
                                 />
                              </Form.Group>
                           </Col>
                        </Row>

                        <div className="d-flex my-4  ">
                           <Button variant="primary" className="px-4" name="submit">
                              Submit
                           </Button>
                        </div>
                     </Form>
                  )}
               </Formik>
            </Container>
         </div>
      </>
   )
}

export default FormikForm
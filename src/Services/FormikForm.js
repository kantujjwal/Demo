import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be a number")
    .min(10, "Phone number must be at least 10 digit")
    .max(12, "Phone number should be not more than 12 digit")
    .required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zipcode: Yup.string()
    .matches(/^\d+$/, "Zip Code must be a number")
    .min(6, "Zip Code must be at least 6 characters")
    .max(6, "Zip Code should be 6 characters")
    .required("Zip Code is required"),
});

const FormikForm = () => {


  const [formikData, setFromikData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const submitFormikForm = (values, { setSubmitting }) => {
    //  values.preventDefault()
    console.log("Hello", values);
    setSubmitting(false);
  };

  //   const handelOnchange = (values) => {
  //     setFromikData({ ...formikData, [values.target.name]: values.target.value });
  //     console.log("e", values.target.value);
  //   };

  //   const initialValues = {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     state: "",
  //     country: "",
  //     zipcode: "",
  //   };

  //   const validationForm = (values) => {
  //     const errors = {};

  //     if (!values.name) {
  //       errors.name = "Name is required";
  //     }

  //     if (!values.email) {
  //       errors.email = "Email is required";
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //       errors.email = "Invalid email address";
  //     }

  //     if (!values.phone) {
  //       errors.phone = "Phone is required";
  //     } else if (values.phone.min.length < 10) {
  //       errors.phone = "Phone number must be 10 characters long";
  //     } else if (values.phone.max.length < 10) {
  //       errors.phone = "Phone number must be 10 characters long";
  //     }

  //     if (!values.zipcode) {
  //       errors.zipcode = "Zip Code is required.";
  //     } else if (!/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/i.test(values.zipcode)) {
  //       errors.zipcode = "Invalid Zip Code";
  //     }

  //     return errors;
  //   };

  return (
    <>
      <div className="pt-3 pb-3">
        <Container className="mt-5 pt-5 pb-5">
          <h1 className="text-center mb-4">Formik Form</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              address: "",
              state: "",
              country: "",
              zipcode: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submitFormikForm}
            // validate={validationForm}
          >
            {({ isSubmitting }) => (
              <Form>
                <Row className="my-4 col-sm-12  col-lg-6 ">
                  <Col sm={12} lg={12}>
                    <>
                      <label>
                        Name: <span className="text-danger">*</span>{" "}
                      </label>
                      <Field
                        placeholder="Full Name"
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error text-danger"
                      />
                    </>
                  </Col>

                  <Col sm={12} lg={12}>
                    <>
                      <label>
                        E-mail: <span className="text-danger">*</span>{" "}
                      </label>
                      <Field
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        id="email"
                        // error={errors.email}
                        // onChange={(e) => handelOnchange(e)}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error text-danger"
                      />
                    </>
                  </Col>

                  <Col sm={12} lg={12}>
                    <>
                      <label>
                        Phone: <span className="text-danger">*</span>{" "}
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        id="phone"
                        type="text"
                        // error={errors.phone}
                        // onChange={(e) => handelOnchange(e)}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error text-danger"
                      />
                    </>
                  </Col>

                  <Col sm={12} lg={12}>
                    <>
                      <label>
                        Address: <span className="text-danger">*</span>{" "}
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        id="address"
                        type="text"
                        // error={errors.address}
                        // onChange={(e) => handelOnchange(e)}
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="error text-danger"
                      />
                    </>
                  </Col>

                  <Col sm={12} lg={12}>
                    <>
                      <label>
                        State: <span className="text-danger">*</span>{" "}
                      </label>
                      <Field
                        className="form-control"
                        placeholder="State"
                        name="state"
                        id="state"
                        type="text"
                        // error={errors.state}
                        // onChange={(e) => handelOnchange(e)}
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="error text-danger"
                      />
                    </>
                  </Col>

                  <Col sm={12} lg={12}>
                    <>
                      <label>
                        Country: <span className="text-danger">*</span>{" "}
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Country"
                        name="country"
                        id="country"
                        type="text"
                        // error={errors.country}
                        // onChange={(e) => handelOnchange(e)}
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="error text-danger"
                      />
                    </>
                  </Col>

                  <Col sm={12} lg={12}>
                    <>
                      <label>
                        Zip Code: <span className="text-danger">*</span>{" "}
                      </label>
                      <Field
                        className="form-control"
                        placeholder="Zip Code"
                        name="zipcode"
                        id="zipcode"
                        type="text"
                        // error={errors.zipcode}
                        // onChange={(e) => handelOnchange(e)}
                      />
                      <ErrorMessage
                        name="zipcode"
                        component="div"
                        className="error text-danger"
                      />
                    </>
                  </Col>
                </Row>

                <div className="d-flex my-4  ">
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-4"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
};

export default FormikForm;

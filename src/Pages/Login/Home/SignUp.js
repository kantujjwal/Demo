import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Button, Container, Row } from "react-bootstrap";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(6, "Password should be 6 characters")
    .required("Password is required"),
});

const Signup = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="pt-3">
      <Container className=" mt-5 pt-5 ">
        <h1 className="text-center mb-4">Signup Form</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row className="my-4 col-sm-12  col-lg-6 ">
                <label htmlFor="name">
                  Name <span className="text-danger">*</span>{" "}
                </label>
                <Field
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
              </Row>
              <Row className="my-4 col-sm-12  col-lg-6 ">
                <label htmlFor="email">
                  Email<span className="text-danger">*</span>{" "}
                </label>
                <Field
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-danger"
                />
              </Row>
              <Row className="my-4 col-sm-12  col-lg-6 ">
                <label htmlFor="password">
                  Password<span className="text-danger">*</span>{" "}
                </label>
                <Field
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error text-danger"
                />
              </Row>{" "}
              <br />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Signup;

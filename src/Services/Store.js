import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsFillCartPlusFill } from "react-icons/bs";

const API_URL = "https://api.escuelajs.co/api/v1/products"; // Replace with your API endpoint URL

const AxiosApiCallExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setData(response.data);
    //   console.log("data", data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Store Data</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Row className="p-1" lg={12} md={8} sm={3}>
          {data.map((item) => (
            <Col className="" lg={3} md={4} sm={3}>
              <Card className=" p-2 pb-2 card_height ">
                <div className="p-1 title">
                  <b>{item.title}</b>
                </div>
                <div>
                  <b>{item.category.name}</b>
                </div>
                <div className="p-1 image_div">
                  <img className="imgage" src={item.category.image} alt="" />
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Price :</b> {item.price} $
                  </div>
                  <div>
                    <b>{item.creationAt}</b>
                  </div>
                </div>
                <Button
                  type="button"
                  class="btn btn-success"
                >
                  <BsFillCartPlusFill />
                  &nbsp;| Add to Cart
                </Button>
              </Card>
            </Col>
          ))}
          {/* <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.email}</p> */}
        </Row>
      )}
    </div>
  );
};

export default AxiosApiCallExample;

import React, { useContext, useState } from "react";
import { mycontext } from "../App";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ProductsDetail = () => {
  // get context
  const [
    items,
    setitems,
    cartcount,
    setCartCount,
    selectedproducts,
    setSelectedProducts,
  ] = useContext(mycontext);

  let { productid } = useParams(); // get product id from url parameter

  const currentitem = items.filter(
    // filter current product based on id from the parameter
    (elements) => elements.id === parseInt(productid)
  );

  const [status, setStatus] = useState(true); // status for add/remove cart button

  //Add products to the cart
  const AddtoCart = (id, title, des, price, image) => {
    setStatus(false);
    setCartCount((cartcount) => cartcount + 1);
    let addedproducts = {
      //create new object
      id: id,
      title: title,
      description: des,
      price: price,
      image: image,
    };

    setSelectedProducts([...selectedproducts, addedproducts]); // cart items
  };

  //Remove products from the cart
  const Remove = (id) => {
    setStatus(true);
    setCartCount((cartcount) => cartcount - 1);
    const removedproducts = selectedproducts.filter(
      (element) => element.id !== parseInt(id)
    );
    setSelectedProducts(removedproducts); //cart items
  };

  return (
    /*Products detail starts*/
    <section>
      <Container>
        <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {currentitem.map((element, index) => {
            return (
              <div key={index} className="product_detail_container">
                <Col>
                  <Carousel>
                    {element.images.map((ele, i) => {
                      return (
                        <Carousel.Item key={i} className="product_detail_image">
                          <img src={ele} />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>{element.title}</Card.Title>
                      <Card.Text>{element.description}</Card.Text>
                      <Card.Text>${element.price}</Card.Text>
                      {status ? (
                        <a
                          id={`add${element.id}`}
                          href="#"
                          onClick={() => {
                            AddtoCart(
                              element.id,
                              element.title,
                              element.description,
                              element.price,
                              element.images[0],
                              element.quantity || 1
                            );
                          }}
                        >
                          <Button>Add To Cart</Button>
                        </a>
                      ) : (
                        <a
                          href="#"
                          onClick={() => {
                            Remove(element.id);
                          }}
                        >
                          <Button>Remove From Cart</Button>
                        </a>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
    /*Products detail ends*/
  );
};

export default ProductsDetail;

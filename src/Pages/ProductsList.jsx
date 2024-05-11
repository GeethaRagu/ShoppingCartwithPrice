
import React, { useContext } from "react";

import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { mycontext } from "../App";
const ProductsList = () => {
    const [items, setitems,cartcount,setCartCount,selectedproducts,setSelectedProducts] = useContext(mycontext);
    return (
      /*Product list starts*/
      <section>
        <Container>
          <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {items.map((element, index) => {
              return (
                <Col key={index}>
                  <CardGroup>
                    <Card >
                      <Card.Img variant="top" src={element.thumbnail} className="list_image"/>
                      <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>{element.description}</Card.Text>
                        <Card.Text>${element.price}</Card.Text>
                        <Link to={`/productsdetail/${element.id}`}><Button>Explore More</Button></Link>
                      </Card.Body>
                     
                    </Card>
                  </CardGroup>
                </Col>
               
              );
            })}
          
          </Row>
        </Container>
      </section>
      /*Product list ends*/
    );

};

export default ProductsList;
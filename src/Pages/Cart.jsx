import React, { useContext } from "react";
import { mycontext } from "../App";
import { Card, CardBody, CardText, Col, Container, Row } from "react-bootstrap";

const Cart = () => {
  
  const [
    items,
    setitems,
    cartcount,
    setCartCount,
    selectedproducts,
    setSelectedProducts,
  ] = useContext(mycontext);
  //console.log(selectedproducts);
  if(selectedproducts.length===0){
    document.getElementById("total_main_container").innerHTML = "No Items in the cart";
  }
  
  const totalPrice = selectedproducts.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = selectedproducts.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  const handleInc = (id, quantity) => {
    setCartCount((cartcount) => cartcount + 1);
    setSelectedProducts((curr) => {
      return curr.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };
  const handleDec = (id, quantity) => {
    setCartCount((cartcount) => cartcount - 1);
    setSelectedProducts((curr) => {
      return curr.map((element) => {
        if (element.id === id && quantity > 0) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };
  const RemovefromCart = (id,quantity) => {
    //console.log(quantity);
    if(quantity)
    setCartCount((cartcount) => cartcount - quantity);
  else
  setCartCount((cartcount) => cartcount - 1);
    const productafterremoved = selectedproducts.filter(
      (element) => element.id !== parseInt(id)
    );
    //console.log("after deleted",productafterremoved);
    setSelectedProducts(productafterremoved);
  };
  return (
    /*Cart Starts*/
    <section>
      <Container className="cart_main_container">
        <Row className="gx-4 gy-2 gx-lg-5">
          <Col>
            {selectedproducts.map((element, index) => {
              return (
                <Card key={index}>
                  <CardBody className="cart_container">
                    <div>
                      <img src={element.image} />
                    </div>
                    <div>
                      <h1>{element.title}</h1>
                      <CardText>{element.description}</CardText>
                    </div>
                    <div className="quantity_container">
                      <span>
                        <button
                          onClick={() =>
                            handleInc(element.id, element.quantity || 1)
                          }
                        >
                          +
                        </button>
                      </span>
                      <span>{element.quantity ? element.quantity : 1}</span>
                      <span>
                        {element.quantity > 1 ? (
                          <button
                            onClick={() =>
                              handleDec(element.id, element.quantity || 1)
                            }
                          >
                            -
                          </button>
                        ) : (
                          <button>-</button>
                        )}
                      </span>
                    </div>
                    <div className="price_container">
                      <strong>${element.price}</strong>
                      <br />
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          RemovefromCart(element.id,element.quantity || 1);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
            <div id="total_main_container">
              <Card>
                <div className="total_container">
                  <div className="left">
                    <strong>TOTAL QUANTITY:</strong>
                  </div>
                  <div>
                    <strong>{totalQuantity}</strong>
                  </div>
                </div>
                <div className="total_container">
                  <div className="left">
                    <strong>SUBTOTAL:</strong>
                  </div>
                  <div>
                    <strong>${totalPrice}</strong>
                  </div>
                </div>
                <div className="total_container">
                  <div className="left">
                    <strong>SHIPPING:</strong>
                  </div>
                  <div>
                    <strong>FREE</strong>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="total_container">
                  <div className="left">
                    <strong>TOTAL:</strong>
                  </div>
                  <div>
                    <strong>${totalPrice}</strong>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    /*Cart ends*/
  );
};

export default Cart;

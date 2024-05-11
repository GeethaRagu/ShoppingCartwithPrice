import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { mycontext } from "../../App";

import { Link } from "react-router-dom";

const Navigation = () => {
  const [items, setitems,cartcount,setCartCount,selectedproducts,setSelectedProducts] =useContext(mycontext);
  
  return (
    /*Navigation starts*/
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to="/productslist">My Shopping</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/productslist">Products</Link>
          </Nav>
          {/* <Button onClick={<Cart/>}>Cart <span>{cartcount}</span></Button> */}
          <Link className="nav-link" to="/cart">Cart<span className="badge bg-dark text-white ms-1 rounded-pill">{cartcount}</span></Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /*Navigation ends*/
  );
};

export default Navigation;

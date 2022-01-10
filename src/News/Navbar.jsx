import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchs from "./Searchs";


export default class Navbars extends React.Component{

  
    render(){
        return(
            <Navbar bg="primary" variant="dark" fixed="top" >
            <Container>
            <Navbar.Brand href= "http://localhost:3000" >Sayyas News</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#src">Search</Nav.Link>
             
            </Nav>
            </Container>
          </Navbar>
        )
    }
}
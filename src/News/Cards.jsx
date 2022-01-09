import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Spinner } from "react-bootstrap";

import Searchs from "./Searchs";


 const Cards = (props) => {
  
 
    return (
        <Card  className="col-md-4 my-5">
        <Card.Img variant="top" src= {props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Title>{props.published} </Card.Title>
          <Card.Text>
           {props.desc}
          </Card.Text>
          <Button variant="primary" href={props.link} target="_blank">Read More</Button>
        </Card.Body>
      </Card> 
            
            ) 
            
            
       
    
  }

 export default Cards;

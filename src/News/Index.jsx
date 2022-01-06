
import React from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

import Navbars from "./Navbar";
import Searchs from "./Searchs";

export default class News extends React.Component{

    render(){
        return(
            <body className="pt-10">
            <Navbars/>
            <br />
            <Container >
             <Searchs/>

            
             <div className="row">
             <Cards/>  
             </div>

             </Container>  
           
            
            
            
         
        </body> )
    }
}

import React from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

import Navbars from "./Navbar";
import Searchs from "./Searchs";

export default class News extends React.Component{
    state = {
        value : []
    }

    handleValue = (data) => {
        this.setState({
            value:data
        });
        console.log(this.state.value)
       
    }

    render(){
        return(
            <body className="pt-10">
            <Navbars/>
            <br />
            <Container >
             <Searchs receiValue={this.handleValue}/>

            
             <div className="row">
             <Cards value={this.state.value}/>  
             </div>

             </Container>  
           
            
            
            
         
        </body> )
    }
}
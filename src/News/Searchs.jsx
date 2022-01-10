import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FormControl, InputGroup, Spinner } from "react-bootstrap";

import axios from "axios";


export default class Searchs extends React.Component{
  state = { key : '' }
    handleSubmit = event => {
      event.preventDefault();
      let src = JSON.stringify(this.state.key);  
   
  axios.get('https://newsapi.org/v2/everything?' +
  'q=' + src +
  '&apiKey=4994cc78db5f49bfbac2484a02e76cfe')
      .then(res => {
        const news = res.data.articles;

        this.setState({ news });
        // console.log(this.state)
        this.props.receiValue(src)
      }).catch(e => {
        console.log(e)
      }).then(()=>{
        <Spinner animation="border" />
      })
  } 
render(){
    return( 
      
             <form onSubmit={this.handleSubmit}>
          
          <InputGroup className="mb-3 mt-5 " id="src" name="key"
           >
    <FormControl Style placeholder="Search News" name="key" type= "text"
    onChange ={e => this.setState({key: e.target.value}) } />
    <InputGroup.Text id="basic-addon2"> <button type="submit">Search</button> </InputGroup.Text>
  </InputGroup>

  
  </form>
            
            
           
  
       
    )
}

}
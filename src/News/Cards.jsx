import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import Searchs from "./Searchs";

export default class Cards extends React.Component{
  state = {
    news: []
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=4994cc78db5f49bfbac2484a02e76cfe`)
      .then(res => {
        const news = res.data.articles;

        this.setState({ news });
        
      }).catch(e => {
        console.log(e)
      }).then(()=>{
        <Spinner animation="border" />
      })
  }

 

  render() {
    return (

          
          this.state.news
            .map(person =>
              <Card  className="col-md-4 my-5">
              <Card.Img variant="top" src= {person.urlToImage} />
              <Card.Body>
                <Card.Title>{person.title}</Card.Title>
                <Card.Title>{person.publishedAt}</Card.Title>
                <Card.Text>
                 {person.description}
                </Card.Text>
                <Button variant="primary" href={person.url} target="_blank">Read More</Button>
              </Card.Body>
            </Card> 
            
            ) 
            
            )
       
    
  }

}

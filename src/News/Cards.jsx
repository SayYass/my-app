import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Spinner } from "react-bootstrap";
import axios from "axios";



export default class Cards extends React.Component{
  state = {
    news: [],
   
  }
 
  
  
  componentDidMount() {
    
    axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=4994cc78db5f49bfbac2484a02e76cfe')
      .then(res => {
        
        const news = res.data.articles;
       
          this.setState({ news });

         
          console.log(this.props.value)
        
        
        
        
        console.log(this.state.news)
        
      }).catch(e => {
        console.log(e)
      }).then(()=>{
        <Spinner animation="border" />
      })
  }

 

  render() {
    return (

         
          this.state.news
            .map(newss =>
              <Card  className="col-md-4 my-5">
              <Card.Img variant="top" src= {newss.urlToImage} />
              <Card.Body>
                <Card.Title>{newss.title}</Card.Title>
                <Card.Title>{newss.publishedAt} </Card.Title>
                <Card.Text>
                 {newss.description}
                </Card.Text>
                <Button variant="primary" href={newss.url} target="_blank">Read More</Button>
              </Card.Body>
            </Card> 
            
            ) 
            
            )
       
    
  }

}

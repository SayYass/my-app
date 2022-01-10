
import React from "react";
import { Container, Spinner } from "react-bootstrap";
import Cards from "./Cards";
import axios from "axios";

import Navbars from "./Navbar";
import Searchs from "./Searchs";

export default class News extends React.Component{
    state = {
        news: [],
        value : []
       
      }

      handleValue = (data) => {
                this.setState({
                    value:data
                });
                console.log(this.state.value)
               
            }

    handleTrending = () => {
      axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=4994cc78db5f49bfbac2484a02e76cfe')
        .then(res => { 
          const news = res.data.articles;
            this.setState({ news })
          console.log(this.state.news)
          
        }).catch(e => {
          console.log(e)
        }).then(()=>{
          <Spinner animation="border" />
        })
    }

    handleFilter = () => {
      
      axios.get('https://newsapi.org/v2/everything?' +
      'q=' + this.state.value +
      '&apiKey=4994cc78db5f49bfbac2484a02e76cfe')
          .then(res => {
            const news = res.data.articles;
    
            this.setState({ news });
            console.log(this.state)
            this.props.receiValue(news)
          }).catch(e => {
            console.log(e)
          }).then(()=>{
            <Spinner animation="border" />
          })

    }
    componentDidMount(){
      
        this.handleTrending();
       
      
       
    }

    componentDidUpdate(){
      
       this.handleFilter();
        
    }
   

    render(){
        return(
            <body className="pt-10">
            <Navbars/>
            <br />
            <Container >
             <Searchs receiValue={this.handleValue} />

            
             <div className="row">
                {
                     this.state.news.map(news => {
                         return <Cards img={news.urlToImage} title={news.title} published={news.publishedAt} desc={news.description} link={news.url} /> 
                     })
                }
              
            
             </div>

             </Container>  
           
            
            
            
         
        </body> )
    }
}
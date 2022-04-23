import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Review.css'

const Review = (props) => {
    console.log(props);
    const{name,img,price,id}=props.review
    const navigate = useNavigate();
    const showReviewDetail =()=>{
        const path =`/review/${id}`
        navigate(path);
    }

    return (
        
  <Col><Card>
  <Card.Img variant="top" src={img} alt=''/>
  <Card.Body>
    <Card.Title>name:{name}   
     </Card.Title>
     <p>price:${price}</p>
     
    <Card.Text>
    <button onClick={showReviewDetail}>{name} id:{id}</button>

    </Card.Text>
  </Card.Body>
  </Card></Col>


  
    );
};

export default Review;
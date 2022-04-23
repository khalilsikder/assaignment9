import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';
const Reviews = () => {
    const[reviews,setReviews]=useState([])
    console.log(reviews);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
        <>
        <p><small>Totall review: {reviews.length}</small></p>
        
            
            <Row md={3}>{
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
            </Row>
         </>
        
    );
};

export default Reviews;
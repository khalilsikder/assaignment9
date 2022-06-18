import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const[reviews,setReviews]=useState([])
    console.log(reviews);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
        <div>
           <div className='review-cart'>
           {
            reviews.map(review=><Review key={review.id} review={review}></Review>)
            }  
            </div> 
        
        
         </div>
        
    );
};

export default Reviews;
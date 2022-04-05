import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {
    const[reviews,setReviews]=useState([])
    console.log(reviews);
    useEffect(()=>{
        fetch('data.jason')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
        <div className='image-iteam'>
            <p><small>{reviews.length}</small></p>
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
            
        </div>
    );
};

export default Reviews;
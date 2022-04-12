import React, { useEffect, useState } from 'react';
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
        <><p><small>Totall review: {reviews.length}</small></p>
        <div className='image-iteam'>
            
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
            
        </div> </>
        
    );
};

export default Reviews;
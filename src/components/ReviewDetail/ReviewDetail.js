import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = () => {
    const{reviewId} =useParams();
    const[review,setReview] =useState({})
    useEffect(()=>{
        const url =`data.jason/${reviewId}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])

    return (
        <div>
            <h2>{reviewId}</h2>
            <p>review name:{review.name}</p>
            <p>review img:{review.img}</p>
            <p>price:{review.price}</p>
        </div>
    );
};

export default ReviewDetail;
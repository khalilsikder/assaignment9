import React from 'react';
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
        <div className='image-iteam'>
            <h2>name:{name}</h2>
            <button onClick={showReviewDetail}>{name} id:{id}</button>
            <img src={img} alt="" />
            
        </div>
    );
};

export default Review;
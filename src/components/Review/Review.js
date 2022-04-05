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
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h2>name:{name}</h2>
            <p>price:${price}</p>
            <button onClick={showReviewDetail}>{name} id:{id}</button>
            </div>
            
        </div>
    );
};

export default Review;
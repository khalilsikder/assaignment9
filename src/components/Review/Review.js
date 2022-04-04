import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = (props) => {
    console.log(props);
    const{name,image,price,id}=props.review
    const navigate = useNavigate();
    const showReviewDetail =()=>{
        const path =`/review/${id}`
        navigate(path);
    }


    return (
        <div>
            <h2>name:{name}</h2>
            <button onClick={showReviewDetail}>{name} id:{id}</button>
        </div>
    );
};

export default Review;
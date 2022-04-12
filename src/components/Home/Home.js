import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {

    const[reviews,setReviews]=useState([])
    console.log(reviews);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])

    return (
        <div className='homepage'>
            <div className='first-div'>
            <h1>World's fancy Laptop</h1>
              
            <p>Here are sone fancy laptop available.you can choose any of them.<br/>if you buy one more then get big discount and if buy one get one gift completely free.</p>
            <button className='first-button'>smooth tuch</button>
            <div className='review'>
                
                {
                reviews.slice(0,3).map(review=><Review key={review.id} review={review}></Review>)
            }
                
            </div>
            <div>
                reviewsall
            </div>
            </div>
            
            <div className='show-image'>
           <img src="https://i.ibb.co/gPLVqXQ/pexels-karsten-madsen-18105.jpg" alt="" />
            </div>
        </div> 
    );
};

export default Home;
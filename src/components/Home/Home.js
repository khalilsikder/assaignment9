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
            <h1>Laptop collection available</h1>
              
            <p>We have some fancy laptop available here.You can choose any of them.<br/>If you buy one more then get big discount and if buy one get one tab completely free.A lot of fency collection are available and price these are less then fifty thousand taka.we have also reuse valuable brand laptop like mac.samsung,acer,lenovo,compact,del,tosiba,walton and so maney china laptops </p>
            <button className='first-button'>smooth tuch</button>
            <div className='home-review'>
                
                {
                reviews.slice(0,3).map(review=><Review key={review.id} review={review}></Review>)
                }
                
            </div>
            <div>
                <button> reviewsall</button>
               
            </div>
            </div>
            
            <div className='show-image'>
           <img src="https://i.ibb.co/gPLVqXQ/pexels-karsten-madsen-18105.jpg" alt="" />
            </div>
        </div> 
    );
};

export default Home;
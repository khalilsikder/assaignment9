import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='homepage'>
            <div className='first-div'>
            <h1>World's fancy Laptop</h1>
              
            <p>Here are sone fancy laptop available.you can choose any of them.<br/>if you buy one more then get big discount and if buy one get one gift completely free.</p>
            <button>smooth tuch</button>
            <div className='review'>
                <button>Reviews(3)</button>
                
            </div>
            <div className='reviewsall'>
                <button>reviews</button>
            </div>
            </div>
            
            <div className='show-image'>
           <img src="https://i.ibb.co/gPLVqXQ/pexels-karsten-madsen-18105.jpg" alt="" />
            </div>
        </div> 
    );
};

export default Home;
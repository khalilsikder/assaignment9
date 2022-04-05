import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='homepage'>
            
            <h2>it's a home page</h2>
            <p>i am here.</p>
            <button>click me</button>
            <div className='show-image'>
           <img src="https://i.ibb.co/gPLVqXQ/pexels-karsten-madsen-18105.jpg" alt="" />
            </div>
            <div>
                <h3>Customer Review</h3>
                <button>see all review</button>
            </div>
        </div> 
    );
};

export default Home;
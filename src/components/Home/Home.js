import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='homepage'>
            <div className='first-div'>
            <h2>It's a home page.</h2>
            <p>Here are sone fancy laptop available.you can choose any of them.if you buy one more then get big discount and if buy one get one gift completely free.</p>
            <button>smooth tuch</button>
            </div>
            
            <div className='show-image'>
           <img src="https://i.ibb.co/gPLVqXQ/pexels-karsten-madsen-18105.jpg" alt="" />
            </div>
        </div> 
    );
};

export default Home;
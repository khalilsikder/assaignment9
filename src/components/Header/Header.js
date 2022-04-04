import React from 'react';
import CustomLink from '../CustomLink/CustomLink'
import './Header.css'
const Header = () => {
    return (
            <nav className='header'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='Reviews'>Reviews</CustomLink>
                <CustomLink to='Dashboard'>Dashboard</CustomLink>
                <CustomLink to='Blogs'>Blogs</CustomLink>
                <CustomLink to='About'>About</CustomLink>   
            </nav>
        
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className='items-center justify-end py-4 pr-10 bg-teal-400 md:flex pr-4h-10'>

            <div className='md:flex '>
                <Link className='mr-3' to='/'>Home</Link>
                <Link className='mr-3' to='/about' >About</Link>
                <Link className='mr-3' to='/contact'>Contact-Us</Link>
            </div>

        </nav>

    );
};

export default Header;
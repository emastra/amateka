import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = ({ toggleMainMenu }) => {
    return (
        <header id='topbar'>
            <Link to='/' className='logo-wrapper'>
                <img className='logo-title' src='/src/assets/svg/amateka-logo.svg' alt='logo' />
            </Link>

            <div className='hamburger-wrapper' onClick={toggleMainMenu}>
                <img className='hamburger' src='/src/assets/svg/hamburger.svg' alt='menu' />
            </div>
        </header>
    );
};

export default Topbar;

import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => {
    let lastScrollTop;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(document.documentElement.scrollTop);
            if (!ref.current) return;
            // if (document.documentElement.scrollTop < 64) return;

            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                ref.current.style.top = '-64px';
            } else {
                ref.current.style.top = '0';
            }

            lastScrollTop = scrollTop;
        });
    }, []);

    return (
        <header ref={ref} className='topbar'>
            <Link to='/' className='logo-wrapper'>
                <div className='logo-title'>Amateka</div>
            </Link>

            <div className='hamburger-wrapper'>
                <img className='hamburger' src='/src/assets/svg/hamburger.svg' alt='menu' />
            </div>
        </header>
    );
};

export default Topbar;

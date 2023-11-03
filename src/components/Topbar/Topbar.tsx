import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => {
    // let lastScrollTop;
    const ref = useRef<HTMLInputElement>(null);
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         console.log(document.documentElement.scrollTop);
    //         if (!ref.current) return;
    //         // if (document.documentElement.scrollTop < 64) return;

    //         const scrollTop = window.scrollY || document.documentElement.scrollTop;

    //         if (scrollTop > lastScrollTop) {
    //             ref.current.style.top = '-64px';
    //         } else {
    //             ref.current.style.top = '0';
    //         }

    //         lastScrollTop = scrollTop;
    //     });
    // }, []);
    // Pensa di nn usare position absolute. la storybar potrebbe salire da solo se fosse position static. Misurare la diff, rimane spazio bianco qunado topbar che è 64px va su.

    return (
        <header ref={ref} id='topbar'>
            <Link to='/' className='logo-wrapper'>
                <img className='logo-title' src='/src/assets/svg/amateka-logo.svg' alt='logo' />
            </Link>

            <div className='hamburger-wrapper'>
                <img className='hamburger' src='/src/assets/svg/hamburger.svg' alt='menu' />
            </div>
        </header>
    );
};

export default Topbar;

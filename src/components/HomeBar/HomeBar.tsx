import { useRef, useEffect } from 'react';
import './HomeBar.scss';

const HomeBar = () => {
    let lastScrollTop;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!ref.current) return;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                ref.current.style.top = '0';
            } else {
                ref.current.style.top = '64px';
            }

            lastScrollTop = scrollTop;
        });
    }, []);

    return (
        <div id='homebar' ref={ref}>
            <div className='search-input-wrapper'>
                <input type='text' className='search-input' placeholder='Search...' />
            </div>

            <div className='controls-wrapper'>
                <div className='sort-icon-wrapper'>
                    <img className='sort-icon' src='/src/assets/svg/sort2.svg' alt='sort' />
                    <div className='control-label'>ordina</div>
                </div>
                <div className='filters-icon-wrapper'>
                    <img className='filters-icon' src='/src/assets/svg/filters2.svg' alt='filters' />
                    <div className='control-label'>filtra</div>
                </div>
            </div>
        </div>
    );
};

export default HomeBar;

import { useEffect, useState } from 'react';
import './BackBar.scss';

const BackBar = () => {
    const [isScrolledOver, setIsScrolledOver] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200 && !isScrolledOver) {
                setIsScrolledOver(true);
            } else if (window.scrollY < 200 && isScrolledOver) {
                setIsScrolledOver(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolledOver]);

    // const [scrolling, setScrolling] = useState(false);
    // const [opacity, setOpacity] = useState(1); // Initialize to fully opaque (1)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         const newOpacity = Math.min(scrollY / 200, 1); // Adjust 80 as needed
    //         setScrolling(scrollY >= 200);
    //         setOpacity(newOpacity);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [scrolling]);

    return (
        <>
            <div id='backbar' className={`${isScrolledOver ? 'solid-variant' : 'transparent-variant'}`}>
                <div className='back-wrapper'>
                    <img className='back-icon' src='/src/assets/svg/back-arrow.svg' alt='go-back' />
                </div>

                <div className='interaction-wrapper'>
                    <div className='share-icon-wrapper'>
                        <img className='share-icon' src='/src/assets/svg/share.svg' alt='share' />
                    </div>
                    <div className='favorite-icon-wrapper'>
                        <img className='favorite-icon' src='/src/assets/svg/heart.svg' alt='save' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BackBar;

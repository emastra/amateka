// import { useEffect, useState } from 'react';
import './BackBar.scss';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const BackBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div id='backbar'>
                <div className='back-wrapper' onClick={() => navigate(-1)}>
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

import './StoryBar.scss';
// import { Outlet } from 'react-router-dom';

const StoryBar = () => {
    return (
        <>
            <div id='storybar'>
                <div className='time-menu-wrapper'>
                    <img className='time-menu-icon' src='/src/assets/svg/time-menu.svg' alt='time-menu' />
                </div>
                {/* <div className='time-slider'>
                    <input type='range' id='myRange' className='slider' min='1945' max='2023' value='1981' />
                </div> */}
                <div className='more-wrapper'>
                    <img className='more-icon' src='/src/assets/svg/more-icon.svg' alt='more-options' />
                </div>
            </div>
        </>
    );
};

export default StoryBar;

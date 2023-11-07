import './StoryBar.scss';
// import { Outlet } from 'react-router-dom';

const StoryBar = () => {
    return (
        <>
            <div id='storybar'>
                <div className='back-wrapper'>
                    <img className='back-icon' src='/src/assets/svg/back-arrow.svg' alt='go-back' />
                </div>

                <div className='story-title-wrapper'>
                    <div className='story-title'>Lorem ipsum title</div>
                </div>

                <div className='more-wrapper'>
                    <img className='more-icon' src='/src/assets/svg/more.svg' alt='more-options' />
                </div>
            </div>
        </>
    );
};

export default StoryBar;

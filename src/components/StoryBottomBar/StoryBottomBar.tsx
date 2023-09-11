import './StoryBottomBar.scss';

const StoryBottomBar = () => {
    return (
        <>
            <div id='storybottombar'>
                <div className='time-menu-wrapper'>
                    <img className='time-menu-icon' src='/src/assets/svg/time-menu.svg' alt='time-menu' />
                </div>
                <div className='time-slider'>
                    <img className='more-icon' src='/src/assets/svg/more-icon.svg' alt='more-options' />
                </div>
                <div className='more-wrapper'>
                    <img className='more-icon' src='/src/assets/svg/more-icon.svg' alt='more-options' />
                </div>
                <div>
                    <img className='more-icon' src='/src/assets/svg/more-icon.svg' alt='more-options' />
                </div>
            </div>
        </>
    );
};

export default StoryBottomBar;

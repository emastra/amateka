import './StoryBottomBar.scss';

const StoryBottomBar = () => {
    return (
        <>
            <div id='storybottombar'>
                <div className='storybottombar-icon-button'>
                    <img id='event-icon' src='/src/assets/svg/event-icon.svg' alt='Events' />
                    <div className='storybottombar-label'>Events</div>
                </div>
                <div className='storybottombar-icon-button'>
                    <img id='years-icon' src='/src/assets/svg/rising-sun-icon.svg' alt='Years' />
                    <div className='storybottombar-label'>Years</div>
                </div>
                <div className='storybottombar-icon-button'>
                    <img id='decades-icon' src='/src/assets/svg/decade-icon.svg' alt='Decades' />
                    <div className='storybottombar-label'>Decades</div>
                </div>
                <div className='storybottombar-icon-button'>
                    <img id='concepts-icon' src='/src/assets/svg/brain-icon.svg' alt='Concepts' />
                    <div className='storybottombar-label'>Concepts</div>
                </div>
            </div>
        </>
    );
};

export default StoryBottomBar;

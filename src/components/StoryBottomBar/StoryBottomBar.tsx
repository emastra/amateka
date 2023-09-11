import './StoryBottomBar.scss';
import { Link } from 'react-router-dom';

const StoryBottomBar = () => {
    return (
        <>
            <div id='storybottombar'>
                <Link to={`/story/${'1'}/events`} className='storybottombar-icon-button'>
                    <img id='event-icon' src='/src/assets/svg/event-icon.svg' alt='Events' />
                    <div className='storybottombar-label'>Events</div>
                </Link>
                <Link to={`/story/${'1'}/years`} className='storybottombar-icon-button'>
                    <img id='years-icon' src='/src/assets/svg/rising-sun-icon.svg' alt='Years' />
                    <div className='storybottombar-label'>Years</div>
                </Link>
                <Link to={`/story/${'1'}/decades`} className='storybottombar-icon-button'>
                    <img id='decades-icon' src='/src/assets/svg/decade-icon.svg' alt='Decades' />
                    <div className='storybottombar-label'>Decades</div>
                </Link>
                <Link to={`/story/${'1'}/concepts`} className='storybottombar-icon-button'>
                    <img id='concepts-icon' src='/src/assets/svg/brain-icon.svg' alt='Concepts' />
                    <div className='storybottombar-label'>Concepts</div>
                </Link>
            </div>
        </>
    );
};

export default StoryBottomBar;

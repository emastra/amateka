import './StoryBar.scss';
// import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StoryBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div id='storybar'>
                {/* back-home? or use exit icon? check navigate usage. */}
                <div className='back-wrapper' onClick={() => navigate('/')}>
                    <img className='back-icon' src='/src/assets/svg/home.svg' alt='go-back' />
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

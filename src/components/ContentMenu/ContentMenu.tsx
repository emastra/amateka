import './ContentMenu.scss';
import { Link } from 'react-router-dom';

const ContentMenu = ({ toggleContentMenu }) => {
    return (
        <div className='contentmenu-screen'>
            <div className='header-wrapper'>
                <div className='menu-title'>Article Contents</div>
                <div className='close-icon-wrapper' onClick={toggleContentMenu}>
                    <img className='close-icon' src='/src/assets/svg/circle-x.svg' alt='close' />
                </div>
            </div>

            <div className='content-list-wrapper'>
                <nav className='contentmenu'>
                    {/* <div className='ch-title'>The Shadow of War and the Dawn of Peace</div> */}

                    <div className='section-title'>The World After 1945: A Landscape of Ruins and Rebirth</div>
                    <div className='par-title'>The Devastation</div>
                    <div className='par-title'>The Human Cost</div>
                    <div className='par-title'>A New Superpower Dynamic</div>
                    <div className='par-title'>Rebuilding Efforts</div>
                    <div className='par-title'>The Birth of the UN</div>
                    <div className='par-title'>The Atomic Age</div>

                    <div className='section-title'>
                        <span>1.2</span>Seeds of a new world order: The Formation of the United Nations
                    </div>
                    <div className='par-title'>The Vision of Unity</div>
                    <div className='par-title'>Early Successes and Challenges</div>
                    <div className='par-title'>Humanitarian and Social Milestones</div>
                    <div className='par-title'>The Challenge of Peacekeeping</div>
                    <div className='par-title'>A Beacon of Hope</div>

                    <div className='section-title'>
                        <span>1.1</span>The World After 1945: A Landscape of Ruins and Rebirth
                    </div>
                    <div className='par-title'>The Devastation</div>
                    <div className='par-title'>The Human Cost</div>
                    <div className='par-title'>A New Superpower Dynamic</div>
                    <div className='par-title'>Rebuilding Efforts</div>
                    <div className='par-title'>The Birth of the UN</div>
                    <div className='par-title'>The Atomic Age</div>

                    <div className='section-title'>
                        <span>1.2</span>Seeds of a new world order: The Formation of the United Nations
                    </div>
                    <div className='par-title'>The Vision of Unity</div>
                    <div className='par-title'>Early Successes and Challenges</div>
                    <div className='par-title'>Humanitarian and Social Milestones</div>
                    <div className='par-title'>The Challenge of Peacekeeping</div>
                    <div className='par-title'>A Beacon of Hope</div>
                </nav>
            </div>
        </div>
    );
};

export default ContentMenu;

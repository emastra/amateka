import './ContentMenu.scss';
import { Link } from 'react-router-dom';

const ContentMenu = () => {
    return (
        <div className='contentmenu-screen'>
            <div className='header-wrapper'>
                <div className='menu-title'>Article Contents</div>
                <div className='close-icon-wrapper'>
                    <img className='close-icon' src='/src/assets/svg/circle-x.svg' alt='close' />
                </div>
            </div>

            <nav className='contentmenu'>test</nav>
        </div>
    );
};

export default ContentMenu;

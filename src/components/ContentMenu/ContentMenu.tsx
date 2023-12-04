import './ContentMenu.scss';
import { Link } from 'react-router-dom';
import useArticleMenusContext from '../../hooks/useArticleMenusContext';

const ContentMenu = () => {
    const { toggleContentMenu } = useArticleMenusContext();

    return (
        <div className='contentmenu-screen'>
            <div className='header-wrapper'>
                <div className='menu-title'>Article Contents</div>
                <div className='close-icon-wrapper' onClick={toggleContentMenu}>
                    <img className='close-icon' src='/src/assets/svg/circle-x.svg' alt='close' />
                </div>
            </div>

            <nav className='contentmenu'>test</nav>
        </div>
    );
};

export default ContentMenu;

import { Link } from 'react-router-dom';
import './MainMenu.scss';

const Menu = () => {
    const closeMenu = () => {};

    return (
        <div className='mainmenu-screen'>
            <div className='close-icon-wrapper'>
                <img className='close-icon' src='/src/assets/svg/circle-x.svg' alt='close' />
                <div style={{ clear: 'both' }}></div>
            </div>

            <nav className='mainmenu'>
                <ol className='section-1'>
                    <li className='menu-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/'>Favoriti</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/'>Impostazioni</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/'>Crea</Link>
                    </li>
                </ol>

                <ol className='section-2'>
                    <li className='menu-item'>
                        <Link to='/'>Chi siamo</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/'>Cosa è</Link>
                    </li>
                </ol>

                <ol className='section-3'>
                    <li className='menu-item'>
                        <Link to='/'>Login</Link> | <Link to='/'>Registrati</Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Menu;

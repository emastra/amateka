import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => {
    return (
        <header className='topbar'>
            <Link to='/' className='logo-wrapper'>
                <div className='logo-title'>Amateka</div>
            </Link>

            <div className='hamburger-wrapper'>
                <img className='hamburger' src='/src/assets/svg/hamburger.svg' alt='menu' />
            </div>
        </header>
    );
};

export default Topbar;

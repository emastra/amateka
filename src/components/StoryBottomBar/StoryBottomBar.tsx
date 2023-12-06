import './StoryBottomBar.scss';
import { NavLink } from 'react-router-dom';
import { NavIcon } from './NavIcon';

const links = [
    { name: 'Events', to: `/story/${'1'}/events` },
    { name: 'Years', to: `/story/${'1'}/years` },
    { name: 'Decades', to: `/story/${'1'}/decades` },
    { name: 'Concepts', to: `/story/${'1'}/concepts` },
];

const NavigationLink = ({ name, to }) => {
    return (
        <NavLink
            to={to}
            className='storybottombar-icon-wrapper'
            children={({ isActive }) => (
                <>
                    {/* <img className={`storybottombar-icon ${isActive ? 'active' : ''}`} src={iconSrc} alt={name} /> */}
                    <NavIcon name={name} isActive={isActive} />
                    <div className='storybottombar-label'>{name}</div>
                </>
            )}
        ></NavLink>
    );
};

const StoryBottomBar = () => {
    return (
        <>
            <div id='storybottombar'>
                {links.map((link) => (
                    <NavigationLink key={link.name} name={link.name} to={link.to} />
                ))}
            </div>
        </>
    );
};

export default StoryBottomBar;

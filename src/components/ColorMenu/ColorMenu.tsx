import './ColorMenu.scss';

const ColorMenu = ({ toggleColorMenu }) => {
    return (
        <div id='colormenu'>
            <div className='closing-handle-wrapper'>
                <div className='closing-handle' onClick={toggleColorMenu}></div>
            </div>
            <div className='secondary-menu-title'>Change Color</div>
            <div className=''>test</div>
        </div>
    );
};

export default ColorMenu;

import './FontMenu.scss';

const FontMenu = ({ toggleFontMenu }) => {
    return (
        <div id='fontmenu'>
            <div className='closing-handle-wrapper'>
                <div className='closing-handle' onClick={toggleFontMenu}></div>
            </div>
            <div className='secondary-menu-title'>Font Configuration</div>
            <div className=''>test</div>
        </div>
    );
};

export default FontMenu;

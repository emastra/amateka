import './FontMenu.scss';
import useArticleMenusContext from '../../hooks/useArticleMenusContext';

const FontMenu = () => {
    const { toggleFontMenu } = useArticleMenusContext();

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

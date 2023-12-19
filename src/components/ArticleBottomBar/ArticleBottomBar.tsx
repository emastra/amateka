import './ArticleBottomBar.scss';

const ArticleBottomBar = ({ toggleContentMenu, toggleColorMenu, toggleFontMenu, toggleMoreMenu }) => {
    return (
        <div id='articlebottombar'>
            <div className='contents-button-wrapper' onClick={toggleContentMenu}>
                <img className='contents-icon' src='/src/assets/svg/contents.svg' alt='contents' />
                <div className='contents-label'>contents</div>
            </div>
            <div className='controls-wrapper'>
                <div className='control-wrap' onClick={toggleColorMenu}>
                    <img className='control-icon' src='/src/assets/svg/palette.svg' alt='palette' />
                </div>
                <div className='control-wrap' onClick={toggleFontMenu}>
                    <img className='control-icon' src='/src/assets/svg/fontconfig.svg' alt='fontconfig' />
                </div>
                <div className='control-wrap' onClick={toggleMoreMenu}>
                    <img className='control-icon more' src='/src/assets/svg/more.svg' alt='more-options' />
                </div>
            </div>
        </div>
    );
};

export default ArticleBottomBar;

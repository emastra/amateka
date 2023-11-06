import './ArticleBottomBar.scss';
import BackBar from '../BackBar';

const ArticleBottomBar = () => {
    return (
        <div id='articlebottombar'>
            <div className='content-button-wrapper'>
                <div>contents</div>
            </div>
            <div className='controls-wrapper'>
                <div>col</div>
                <div>font</div>
                <div>more</div>
            </div>
        </div>
    );
};

export default ArticleBottomBar;

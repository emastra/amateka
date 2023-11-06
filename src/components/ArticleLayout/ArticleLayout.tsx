import './ArticleLayout.scss';
import BackBar from '../BackBar';
import ArticleBottomBar from '../ArticleBottomBar/ArticleBottomBar';
import { Outlet } from 'react-router-dom';

const ArticleLayout = () => {
    return (
        <>
            <BackBar />
            <Outlet />
            <ArticleBottomBar />
        </>
    );
};

export default ArticleLayout;

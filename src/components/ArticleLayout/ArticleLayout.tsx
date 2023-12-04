import './ArticleLayout.scss';
import { ArticleMenusProvider } from '../../context/ArticleMenusContext';
import { Outlet } from 'react-router-dom';

import BackBar from '../BackBar';
import ArticleBottomBar from '../ArticleBottomBar/ArticleBottomBar';

const ArticleLayout = () => {
    return (
        <ArticleMenusProvider>
            <BackBar />
            <Outlet />
            <ArticleBottomBar />
        </ArticleMenusProvider>
    );
};

export default ArticleLayout;

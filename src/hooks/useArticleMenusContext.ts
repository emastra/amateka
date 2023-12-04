import { useContext } from 'react';
import { ArticleMenusContext, IArticleMenusContext } from '../context/ArticleMenusContext';

const useArticleMenusContext = (): IArticleMenusContext => {
    const context = useContext(ArticleMenusContext);

    if (context === undefined) {
        throw new Error('useMenuContext must be used within a ArticleMenusProvider');
    }

    return context;
};

export default useArticleMenusContext;
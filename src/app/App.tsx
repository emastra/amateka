import { Routes, Route, Outlet } from 'react-router-dom';
// https://blog.webdevsimplified.com/2022-07/react-router/  --> c'è anche differenti layout per routes. cosa che mi serve
// improve SEO --> https://synodus.com/blog/web-development/single-page-application-seo/

import MainLayout from '../components/MainLayout/MainLayout';
import IntroLayout from '../components/IntroLayout/IntroLayout';
import StoryLayout from '../components/StoryLayout/StoryLayout';
import ArticleLayout from '../components/ArticleLayout/ArticleLayout';

import Home from '../pages/Home';
import StoryIntro from '../pages/StoryIntro';
import StoryEvents from '../pages/StoryEvents';
import StoryYears from '../pages/StoryYears/StoryYears';
import StoryDecades from '../pages/StoryDecades/StoryDecades';
import StoryConcepts from '../pages/StoryConcepts/StoryConcepts';
import Article from '../pages/Article/Article';
import NotFound from '../pages/NotFound';
import MDEditorPage from '../pages/MDEditorPage/MDEditorPage';
import CustomizePage from '../pages/CustomizePage/Customize';

// import { ArticleMenusProvider } from '../context/ArticleMenusContext';
import { StoryProvider } from '../context/StoryContext';

function App() {
    return (
        <div className='app-container'>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/customize' element={<CustomizePage />} />
                </Route>

                <Route element={<IntroLayout />}>
                    <Route path='/story/:id/intro' element={<StoryIntro />} />
                </Route>

                {/* <Route element={<StoryLayout />}>
                    <Route path='/story/:id/events' element={<StoryEvents />}></Route>
                    <Route path='/story/:id/years' element={<StoryYears />}></Route>
                    <Route path='/story/:id/decades' element={<StoryDecades />}></Route>
                    <Route path='/story/:id/concepts' element={<StoryConcepts />}></Route>
                </Route> */}

                {/* <Route path='/story/:id/content' element={<StoryContainer />}>
                        <Route path='/:sectionORscreen' element={<StoryPagesORscreens />}></Route>
                    </Route> 
                */}

                <Route
                    element={
                        <StoryProvider>
                            <Outlet />
                        </StoryProvider>
                    }
                >
                    <Route path='/story/:id/content/:section' element={<StoryEvents />}></Route>
                </Route>

                <Route element={<ArticleLayout />}>
                    <Route path='/story/:id/article/:articleId' element={<Article />} />
                </Route>

                <Route path='/editor' element={<MDEditorPage />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

{
    /* err: Perchè uso il router Outlet invece che children */
}
{
    /* <Route
            path='/'
            element={
                <MainLayout>
                    <Home />
                </MainLayout>
            }
    /> */
}

export default App;

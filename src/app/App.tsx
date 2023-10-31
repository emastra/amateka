import { Routes, Route } from 'react-router-dom';
// https://blog.webdevsimplified.com/2022-07/react-router/  --> c'è anche differenti layout per routes. cosa che mi serve
// improve SEO --> https://synodus.com/blog/web-development/single-page-application-seo/

import MainLayout from '../components/MainLayout/MainLayout';
import StoryLayout from '../components/StoryLayout/StoryLayout';

import Home from '../pages/Home';
import StoryIntro from '../pages/StoryIntro';
import StoryEvents from '../pages/StoryEvents';
import StoryYears from '../pages/StoryYears/StoryYears';
import StoryDecades from '../pages/StoryDecades/StoryDecades';
import StoryConcepts from '../pages/StoryConcepts/StoryConcepts';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <div className='app-container'>
            {/* aggiungere un div.page-container? main?? */}
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                </Route>
                <Route path='/story/:id/intro' element={<StoryIntro />} />
                <Route element={<StoryLayout />}>
                    <Route path='/story/:id/events' element={<StoryEvents />}></Route>
                    <Route path='/story/:id/years' element={<StoryYears />}></Route>
                    <Route path='/story/:id/decades' element={<StoryDecades />}></Route>
                    <Route path='/story/:id/concepts' element={<StoryConcepts />}></Route>
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;

import { Routes, Route } from 'react-router-dom';

import Topbar from '../components/Topbar';
import Menu from '../components/Menu';
import Home from '../pages/Home';
import StoryIntro from '../pages/StoryIntro';
import StoryLayout from '../components/StoryLayout/StoryLayout';
import StoryEvents from '../pages/StoryEvents';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <div className='app-container'>
            <Topbar />
            <Menu />
            {/* https://blog.webdevsimplified.com/2022-07/react-router/  --> c'è anche differenti layout per routes. cosa che mi serve */}
            {/* aggiungere un div.page-container? */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/story/:id/intro' element={<StoryIntro />} />
                <Route element={<StoryLayout />}>
                    <Route path='/story/:id/events' element={<StoryEvents />}></Route>
                    <Route path='/story/:id/years'></Route>
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;

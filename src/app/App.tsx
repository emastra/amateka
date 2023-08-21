import { Routes, Route } from 'react-router-dom';

import Topbar from '../components/Topbar';
import Menu from '../components/Menu';
import Home from '../pages/Home';

function App() {
    return (
        <div className='app-container'>
            <Topbar />
            <Menu />
            {/* https://blog.webdevsimplified.com/2022-07/react-router/  --> c'è anche differenti layout per routes. cosa che mi serve */}
            {/* aggiungere un div.page-container? */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/story/:id/intro' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

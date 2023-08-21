import { Routes, Route } from 'react-router-dom';

import Topbar from '../components/Topbar';
import Home from '../pages/Home';

function App() {
    return (
        <div className='app-container'>
            <Topbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

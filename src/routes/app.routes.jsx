import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewMovie } from '../pages/NewMovie';
import { Preview } from '../pages/Preview';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newmovie" element={<NewMovie />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/preview/:id" element={<Preview />} />
        </Routes>
    )
}
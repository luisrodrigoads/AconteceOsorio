import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import InitialPage from './pages/InitialPage';
import LoginPage from './pages/LoginPage';

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<InitialPage/>} />
            <Route path="/LoginPage" element={<LoginPage/>}/>
        </Routes>
    );
}
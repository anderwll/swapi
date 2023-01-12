import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -- PAGES --
import Films from '../pages/Films';
import Home from '../pages/Home';
import Initial from '../pages/Initial';
import Peoples from '../pages/Peoples';
import Planets from '../pages/Planets';
import Species from '../pages/Species';
import Startships from '../pages/Startships';
import Vehicles from '../pages/Vehicles';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Initial />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/peoples' element={<Peoples />}/>
                <Route path='/planets' element={<Planets />}/>
                <Route path='/films' element={<Films />}/>
                <Route path='/species' element={<Species />}/>
                <Route path='/vehicles' element={<Vehicles />}/>
                <Route path='/startships' element={<Startships />}/>
                
                <Route path='*' element={<h1>404 - NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
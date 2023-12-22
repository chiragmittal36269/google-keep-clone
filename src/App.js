import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import CreateNote from './Components/CreateNote';
import View from './Components/View';

function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<View />} />
                <Route path='create' element={<CreateNote />} />
            </Routes>
        </div>
    )
}

export default App;
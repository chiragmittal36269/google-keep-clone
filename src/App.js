import React from 'react';
import { Route, Routes } from "react-router-dom";
import CreateNote from './Components/CreateNote';
import View from './Components/View';
import "./styles.css";

function App() {

    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<View />} />
                <Route path='create' element={<CreateNote />} />
            </Routes>
        </div>
    )
}

export default App;
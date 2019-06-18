import React from 'react';
import {MainPage} from './components/MainPage/MainPage';
import {Store} from './components/Store/Store';

function App() {
    return (
        <Store>
            <MainPage/>
        </Store>
    );
}

export default App;

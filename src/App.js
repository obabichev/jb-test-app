import React from 'react';
import {Store} from './components/Store/Store';
import {AppRouter} from './components/AppRouter';

function App() {
    return (
        <Store>
            <AppRouter/>
        </Store>
    );
}

export default App;

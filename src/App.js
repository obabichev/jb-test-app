import React from 'react';
import {Store} from './components/Store/Store';
import {MainPageContainer} from './containers/MainPageContainer';

function App() {
    return (
        <Store>
            <MainPageContainer/>
        </Store>
    );
}

export default App;

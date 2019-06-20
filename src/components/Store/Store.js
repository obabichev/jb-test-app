import React from 'react';
import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from '../../reducers';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
    rootReducer,
    enhancers
    // applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const Store = (props) => (<Provider store={store}>
    {props.children}
</Provider>);

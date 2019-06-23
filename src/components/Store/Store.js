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
);

export const Store = (props) => (<Provider store={store}>
    {props.children}
</Provider>);

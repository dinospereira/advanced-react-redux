import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from '../reducers';
import logger from 'redux-logger';

export default ({ children, initialState = {} }) => {
    return (
        <Provider store={ createStore(reducers, initialState, applyMiddleware(reduxPromise))}>
            { children }
        </Provider>
    )
};
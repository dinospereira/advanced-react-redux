import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';
import logger from 'redux-logger';

export default ({ children, initialState = {} }) => {
    let middleware = [reduxPromise, logger];
    return (
        <Provider store={ createStore(reducers, initialState, applyMiddleware(...middleware))}>
            { children }
        </Provider>
    )
};
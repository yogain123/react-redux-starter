// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';
import 'babel-polyfill';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';

// IMPORT COMPONENTS

import { AppRouter } from './routers/AppRouter';


// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <div className="container">
            <AppRouter />
        </div>
    </Provider>
);
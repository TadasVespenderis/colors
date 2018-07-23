import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import AppRoutes from './AppRoutes';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import colorsReducer from './reducers/colorsReducer';
import activeReducer from './reducers/activeReducer';
import statsReducer from './reducers/statsReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
    colors: colorsReducer,
    active: activeReducer,
    stats: statsReducer,
    users: usersReducer
});

const store = createStore (rootReducer);

ReactDOM.render(
        <Provider store={store}>
            <AppRoutes />
        </Provider>, document.getElementById('root'));
registerServiceWorker();

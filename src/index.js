import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { route, clockList, zIndex, signin, calendarShow, calendar } from './reducers/reducers';
import { searchRobots, requestRobots } from './reducers/robotsReducers';
import thunkMiddleware from 'redux-thunk';

// const logger = createLogger();
const rootReducers = combineReducers({route, clockList, zIndex, signin, calendarShow, calendar, searchRobots, requestRobots});
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

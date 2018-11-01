import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { route, clockList, zIndex, signin, calendar } from './reducers/reducers';

const logger = createLogger();
const rootReducers = combineReducers({route, clockList, zIndex, signin, calendar});
const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './config/ConfigStore';
import * as serviceWorker from './serviceWorker';
import {history} from './helpers/History';
import App from './components/App';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <App /> 
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
 );


serviceWorker.unregister();

import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
// import * as serviceWorker from './serviceWorker';
import App from './App';
import { store, persistor } from './store';

// style + assets
import './assets/scss/style.scss';
import config from './config';
import { registerLicense } from '@syncfusion/ej2-base';
import { PersistGate } from 'redux-persist/integration/react';

// ==============================|| REACT DOM RENDER  ||============================== //

registerLicense('ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIfEx0RWFab1Z6cVVMZF9BNQtUQF1hSn5Rd0VjUXpfcnVVQWZY');
const container = document.getElementById('root');
// const root = createRoot(container);  createRoot(container!) if you use TypeScript
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    container
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { LoadFonts } from "./configFonts";
import configureStore from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';

document.title = "Dashy";

const store = configureStore();

if (window.addEventListener)
    window.addEventListener("load", startApp, false);
else if (window.attachEvent)
    window.attachEvent("onload", startApp);
else window.onload = startApp;

function startApp() {
    LoadFonts();
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
    registerServiceWorker();
}

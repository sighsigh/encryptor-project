import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import configureStore from './app/store';

import App from "./app/App";

const store = configureStore();

const appContainer = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, appContainer);

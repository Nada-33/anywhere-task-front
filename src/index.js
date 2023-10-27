import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import authReducer from "./state/stateMangament"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
const store = configureStore({
  reducer: authReducer
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider >
  </React.StrictMode>
);


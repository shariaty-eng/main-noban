import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import './assets/bootstrap/css/bootstrap.min.css';
import swDev from './swDev';
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);
swDev()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

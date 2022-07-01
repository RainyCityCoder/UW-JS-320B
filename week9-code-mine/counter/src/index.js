import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Add these:
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { counterReducer, incrementAction } from './counter';
import { Provider } from 'react-redux';

//this is where redux store goes so it can be injected into app
//Note: createStore() is deprecated, but is simple & good to learn on, but is why we're importing legacy_createStore above
const store = createStore(
  combineReducers({
    count: counterReducer,
  })
)

// Note: combining many reducers can take up lots of memory

// testing (post-store setup):
// console.log(store.getState());
// store.dispatch(incrementAction());
// console.log(store.getState());

// without combineReducers:
// state = 0
// with combineReducers:
// state = {
//   count: 0
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Change to <Provider>
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

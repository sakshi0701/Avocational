import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './components/designing/store/reducers/mainReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.min.css"

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);
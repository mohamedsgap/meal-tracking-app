import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './reducers'


const store = createStore(reducer)

console.log(store)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

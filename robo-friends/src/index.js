import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

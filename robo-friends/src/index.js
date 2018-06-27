import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

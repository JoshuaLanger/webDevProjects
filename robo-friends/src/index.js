import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import './CardList.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));
registerServiceWorker();

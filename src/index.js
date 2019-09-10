import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing/Router';
import UpdateState from './components/containers/UpdateState';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));
//ReactDOM.render(<UpdateState />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

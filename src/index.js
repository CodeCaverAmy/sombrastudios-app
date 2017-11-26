import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

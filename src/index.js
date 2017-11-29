import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/styles.min.css';
import Home from './containers/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

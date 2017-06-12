import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import actionCable from 'actioncable'

const CableApp = {}

CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)

ReactDOM.render(<App cableApp={CableApp}/>, document.getElementById('root'));
registerServiceWorker();

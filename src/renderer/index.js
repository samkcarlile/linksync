import React from 'react';
import { render } from 'react-dom';

import 'regenerator-runtime';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './index.css';

import App from './App';

render(<App />, document.querySelector('#app'));

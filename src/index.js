import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';

import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css'

window.Prism = Prism;

ReactDOM.render(<Presentation />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import { browserHistory } from 'react-router';
// import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';

const target = document.getElementsById('root');

const node = (
    <Root history={history} />
);

ReactDOM.render(node, target);
//registerServiceWorker();

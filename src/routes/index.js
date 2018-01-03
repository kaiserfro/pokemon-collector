import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {requireAuthentication} from '../components/AuthenticatedComponent';

import App from '../containers/App';
import LandingPage from '../views/LandingPage';
import AppProtected from '../containers/AppProtected';
import Home from '../views/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="/home" component={requireAuthentication(AppProtected)}>
            <IndexRoute component={Home} />
        </Route>
    </Route>
);

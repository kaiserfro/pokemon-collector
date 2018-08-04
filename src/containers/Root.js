import React from 'react';
import routes from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router history={this.props.history} routes={routes} />
            </div>
        );
    }
}

export default Root;

import React from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import {Router} from 'react-router';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Provider store={this.props.store}>
                    <div>
                        <Router history={this.props.history} routes={routes} />
                    </div>
                </Provider>
            </div>
        );
    }
}

Root.propTypes = {
    store = React.PropTypes.object.isRequired
};

export default Root;

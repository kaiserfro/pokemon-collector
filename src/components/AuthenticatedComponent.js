import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

export function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                this.componentWillReceiveProps.dispatch(push('/'));
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true ? <Component {...this.props} /> : null}
                </div>
            );
        }
    }

    const mapStateToProps = (state) => ({
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);
}

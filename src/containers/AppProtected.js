import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

export default class AppProtected extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-sm-3 col-md-2 sidebar-offcanvas" id="sidebar" role="navigation">
                    <ul className="nav nav-sidebar">
                        <li><Link to="/home"><i className="fa fa-home"></i> Home </Link></li>
                    </ul>
                </div>
                <div classname="col-sm-9 col-md-10 main">
                    <p className="visible-xs">
                        <Button><i className="glyphicon glyphicon-chevron-left"></i></Button>
                    </p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

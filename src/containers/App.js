import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//import {logoutAndRedirect} from '../actions';
//import {LoginForm} from '../components/LoginForm';

// const WelcomeSpan = ({...props}) => (
//     <div>
//         <Button className="navbar-btn navbar-right" onClick={() => props.dispatch(logoutAndRedirect())}>
//             <i className="fa fa-sign-out"></i> Logout
//         </Button>
//         <Navbar.Text pullRight>
//             Welcome, {props.displayName}
//         </Navbar.Text>
//     </div>
// );

// @connect((state) => {
//     return {
//         isAuthenticated: state.auth.isAuthenticated,
//         userName: state.auth.userName,
//         displayName: state.auth.displayName
//     };
// })
export default class App extends React.Component {
    render() {
        // const {dispatch} = this.props;
        return (
            <div>
                <nav className="pt-navbar .modifier">
                    <div className="pt-navbar-group pt-align-left">
                        <div className="pt-navbar-heading">Pokemon Collector</div>
                    </div>
                    <div className="pt-navbar-group pt-align-right">
                        <Link to="/" className="pt-button pt-minimal pt-icon-home">Home</Link>
                    </div>
                </nav>
                <br />
                <div className="row">
                    <div className="col-xs">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );


        // return (
        //     <Row className="content-container" id="main">
        //         <Navbar fluid fixedTop>
        //             <Navbar.Header>
        //                 <button className="navbar-expand-toggle">
        //                     <i className="fa fa-bars icon"></i>
        //                 </button>
        //                 <ol className="breadcrumb navbar-breadcrumb">
        //                     <li className="active">Pokemon Collector</li>
        //                 </ol>
        //                 <button className="navbar-right-expand-toggle pull-right visible-xs">
        //                     <i className="fa fa-th icon"></i>
        //                 </button>
        //             </Navbar.Header>
        //             {this.props.isAuthenticated ?
        //                 <WelcomeSpan displayName={this.props.displayName} dispatch={this.props.dispatch} /> :
        //                 <Navbar.Form pullRight>
        //                     <LoginForm />
        //                 </Navbar.Form>
        //             }
        //         </Navbar>
        //         {this.props.children}
        //     </Row>
        // );
    }
}

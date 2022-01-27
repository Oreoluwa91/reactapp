import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignin, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink, withRouter, Route } from 'react-router-dom'


class Navbar extends React.Component {
    signout = () => {
        sessionStorage.removeItem("token")
    }
    auth = () => {
        const token = sessionStorage.getItem("token")
        let menu = (

            <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin">Sign-In</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Sign-Up</NavLink>
                            </li>
                        </ul>

        )
        if (token !== null) {
            menu =
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#"><FontAwesomeIcon icon= {faUser}/ >Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                                <a className="nav-link"><FontAwesomeIcon icon= {faUser}/ >Account</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin" onClick={this.signout}><FontAwesomeIcon icon= {faSignOutAlt}/ >Sign-Out</NavLink>
                            </li>
        </ul>

        }

        return menu
    }

    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <NavLink className="navbar-brand" to="/">My babyy</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0 btn-success text-white" type="submit">Search</button>
                    </form>

                    
                        {this.auth()}
                </div>
                </nav>
        );
    }
}
export default withRouter(Navbar);
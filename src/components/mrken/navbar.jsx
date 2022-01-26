import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignin } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {
    signout = () => {
        sessionStorage.removeitem("token")
    }
    auth = () => {
        const token = sessionStorage.getitem("token")
        let menu = (
            <ul>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        Offers
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">Signin</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </li>
            </ul>
        )
        if (token !==null){
            menu = (
                <ul>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/account">Account</NavLink>
                    </li>
    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin" onClick={this.signout}>Signout</NavLink>
                    </li>
                </ul>
            )
        }

    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <NavLink className="navbar-brand" exact to="/">Manny</NavLink>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} /> Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Offers
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin">Signin</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
            </React.Fragment>
        );

    }
}

export default Navbar;
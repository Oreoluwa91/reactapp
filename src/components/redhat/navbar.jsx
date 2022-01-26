import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignin } from '@fortawesome/free-solid-svg-icons'


class Navbar extends React.Component {

    styles = {
        list: {
            display : "inline-block",
            margin : "5px",
        }
    }
    render() {
        return (
        <div>
            <img src="../logo192.png" width="60" />
            <ul style ={{listStyle: "none", float: "right" }}>
                <li style={this.styles.list}><FontAwesomeIcon icon= {faUser}/ >Signup</li>
                <li style={this.styles.list}><FontAwesomeIcon icon= {faUser}/ >Signin</li>
            </ul>
        </div>
        );

    }
}  

export default Navbar
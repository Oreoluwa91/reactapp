import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignin, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'





class Signup extends React.Component {


    render() {
        console.log("Props", this.props)
        return (

            <div className="container">
                <div className="row justify-content-center" style={{ height: '100vh' }}>
                    <form action="" className="border align-self-center p-4" style={{ width: '350px' }} onSubmit={this.props.onHandleSubmit}>
                        <h3 className="text-center">Sign Up</h3>
                        <hr />
                        <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span></div>
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username" onChange={this.props.onHandleChange} />
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span></div>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" onChange={this.props.onHandleChange} />
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span></div>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={this.props.onHandleChange} />
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span></div>
                            <input type="password" name="confirm" id="confirm" className="form-control" placeholder="Confirm Password" onChange={this.props.onHandleChange} />
                        </div>
                        <div className="input-group mb-4">

                            <input type="submit" value="Sign up" className="btn btn-primary btn-block" />
                        </div>
                    </form>
                </div>
            </div>

        );

    }
}

export default Signup;
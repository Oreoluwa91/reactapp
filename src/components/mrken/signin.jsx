import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignin , faUser , faEnvelope , faLock} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Swal from "sweetalert2"




class Signin extends React.Component {
    handleSignIn = (e) => {
        e.preventDefault()
        const {email, password} = this.props.props.user
        const post = {email, password}
        axios.post("https://reqres.in/api/login", post).then((response) => {
          console.log("Server Response loading...", response.data)
          if (response.data !== 0) {
            Swal.fire({
              title: "Success",
              text: "Signup was successful",
              icon: "success",
              confirmButtonText: "Ok"
            })
            this.setState({submitted:true, authenticated:true})
            this.props.history.push("/dashboard")
          }else{
            Swal.fire({
              title: "Error",
              text: "Invalid Email or Password",
              icon: "error",
              confirmButtonText: "Ok"
            })
          }
        })
      }
   

    render() {
        const {email, password} = this.props.props.user
        console.log("Props", this.props)
        return (
           
            <div className="container">
            <div className="row justify-content-center" style={{height: '100vh'}}>
                <form action="" className="border align-self-center p-4" style={{width: '350px'}} onSubmit={this.handleSignIn}>
                    <h3 className="text-center">Sign in</h3>
                    <hr/>
                   
                    <div className="input-group mb-4">
                        <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span></div>
                        <input type="email" name="email" id="email" className="form-control" value= {email} placeholder="Email" onChange={this.props.onHandleChange}/>
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span></div>
                        <input type="password" name="password" id="password" value={password} className="form-control"placeholder="Password" onChange={this.props.onHandleChange}/>
                    </div>
                   
                    <div className="input-group mb-4">
                       
                        <input type="submit" value="Sign in " className="btn btn-primary btn-block" />
                    </div>
                </form>
            </div>
        </div>   
        
        );

    }
}

export default (Signin);
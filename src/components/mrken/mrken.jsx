import React from 'react';
import { BrowserRouter, Route, Routes,Switch} from 'react-router-dom';
import Homes from "./homes";
import Navbar from './navbar';
import Signin from './signin';
import Signup from './signup';
import Dashboard from './dashboard';
import axios from "axios";
import Swal from "sweetalert2";

class Mrken extends React.Component {
    
    state ={
        user : {
            username: '',
            email:'',
            password:'',
        },
        submitted: false,
        authenticated: false,


    }

    handleChange = (e) => {
       const input = e.target
       const user = {...this.state.user, [input.name]:input.value}
        this.setState({user:user})
    }

    handleSignUp = (e) => {
        e.preventDefault()
        const {username, email, password} = this.state.user
        const post = {username, email, password}
        axios.post("https://reqres.in/api/users", post).then((response) => {
          console.log("Server Response loading...", response.data)
          if (response.data !== 0) {
            Swal.fire({
              title: "Success",
              text: "Signup was successful",
              icon: "success",
              confirmButtonText: "Ok"
            })
            this.setState({submitted:true})
          }
        })
      }
    
       


         
    render() { 
        return (
           
               <BrowserRouter>
               <React.Fragment>
                   <Navbar/>
                   <Switch>
            <Route exact path="/" component={() => <Homes props={this.state}/>} />
            <Route exact path="/signin" component={() => <Signin onHandleSignIn = {this.handleSignIn} onHandleChange={this.handleChange} props={this.state}/>}/>
            <Route exact path="/signup" component={() => <Signup onHandleSignUp = {this.handleSignUp} onHandleChange={this.handleChange} props={this.state}/>}/>
            <Route exact path="/dashboard" component={() => <Dashboard props={this.state}/>}/>
            <Route exact path="/account" component={() => <Account props={this.state}/>}/>
          </Switch>
               </React.Fragment>
               </BrowserRouter>
           
           
        
        );

    }
}

export default (Mrken);
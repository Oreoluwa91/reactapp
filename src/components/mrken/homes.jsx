import React from 'react';
import Navbar from './navbar'
import Body from './body'
import Footer from './footer'



class Homes extends React.Component {
   

    render() {
        console.log("Props", this.props)
        return (
           
               
               <div className="container-fluid m-0" >
                   
                    <Body/>
                   <Footer/>


                </div>
           
        
        );

    }
}

export default Homes;
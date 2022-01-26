import React from 'react';
import '../index.css'

class Counter extends React.Component {
    state = {
        count : 0,

    }
    getRandomColors = () => {
        let colors = [
            "primary",
            "secondary",
            "danger",
            "success",
            "info",
            "warning",
            "light",
        ];
        let randnum = Math.floor(Math.random() * colors.length)
        console.log(randnum)
      let  classes = "container-fluid w-100 h-100 bg-"
        classes += colors[randnum]
        this.setState({backgroundcolor:classes})

    }
    componentDidMount(){
        setTimeout(() => {
            this.getRandomColors()
        },2000);
        
    }
     
    formatCount = () => {
        const cnt = this.state.count
        return cnt === 0 ? 'Ade': cnt
    }

    render() {
       

        return (
        
            <div className={this.state.backgroundcolor}> 
            <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
            <button className="btn btn-info" onClick={this.handleIncrement}>+</button>
            <button className="btn btn-info" onClick={this.handleDrecrement}disabled={this.isDisabled()}>-</button>
            <button className="btn btn-danger" onClick={this.reset}>Reset</button>
            <button className="btn btn-danger" onClick={this.reset}>Delete</button>
            <button  onClick={this.getRandomColors}>Color</button>
         </div>
            );
          
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    handleIncrement = () => {
        let val = this.state.count
        this.setState({count:val +1}) 
    }
    handleDrecrement =() => {
        let val = this.state.count
        this.setState({count : val - 1})
    }
    isDisabled = () => {
        if(this.state.count <=0){
            return "disabled"
        }
    }
    
    reset = () => {
        this.setState({count:0})
     }

     
}

export default Counter;

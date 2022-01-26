import React from 'react';
import Counter from './counter';

class Counters extends React.Component{

    
    render() {
        return(
        <React.Fragment>
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
            
        </React.Fragment>);
    
   } 
}

export default Counters;
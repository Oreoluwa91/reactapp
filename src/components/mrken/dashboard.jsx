import React from 'react';



class Dashboard extends React.Component {
    
    render() {
        console.log("Props", this.props)
      
    
        return (
            <div>
              <h1 className="text-center">
                    Dashboard
                    <hr />
                </h1>
            </div>
        
        
        );

    }
}

export default Dashboard;
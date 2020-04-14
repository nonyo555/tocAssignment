import React, { Component } from 'react';
class Finalpage extends Component {
    state = {  }
    render() { 
        return (  
         <div>    
             <h1>Hello</h1>
             <button className ="badge badge-primary"  onClick =  {this.props.startstate}> Click Me to go to Start Page</button>
         </div>
        );
    }
}
 
export default Finalpage;
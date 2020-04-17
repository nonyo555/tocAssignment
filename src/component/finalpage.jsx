import React, { Component } from 'react';
class Finalpage extends Component {
    state = { 
        last : [

        ]
     }
    render() { 
        var i ;
        for (i=0;i<this.props.nameInput.length;i++){
            this.setState(state=>{
                const list = this.state.last.push(this.props.nameInput[i])
                if(i !=this.props.nameInput.length-1){const list2 = this.state.last.push("->")
            }})
        }
        return (  
         <div>    
             <h1>Your choose this product</h1>
        <h2> {this.props.nameInput[0]} -> {this.props.nameInput[1]} -> {this.props.nameInput[2]} -> Total price : {this.props.price} Your Money : {this.props.coin} Your Change: {this.props.tron}</h2>
             <h3>Are you sure to purchash this prouduct?</h3>
             <button className ="badge badge-primary"  onClick =  {this.props.startstate}>Confirm</button>
             <button className ="badge badge-primary" color = "Red"  onClick =  {this.props.cancle}>Cancle</button>
         </div>
        );
    }
}
 
export default Finalpage;
import React, { Component } from 'react';
import receipt from "./product_type/product_picture/receipt.png"
class Finalpage extends Component {
    state = { 
        last : [

        ]
     }
    render() { 
        return (  
         <div className ="receipt">    
             <h1>Your choose this product</h1>
        <h2> {this.props.nameInput[0]}<br />
             {this.props.nameInput[1]}<br />
             {this.props.nameInput[2]}<br />
             Total price : {this.props.price}<br /> 
             Your Money : {this.props.coin}<br /> 
             Your Change: {this.props.tron}</h2><br />
             <h3>Are you sure to purchash this prouduct?</h3>
             <button className ="btn btn-success"  onClick =  {this.props.startstate}>Confirm</button>
             <button className ="btn btn-outline-danger"  onClick =  {this.props.cancle}>Cancle</button>
         </div>
        );
    }
}
 
export default Finalpage;
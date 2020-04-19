import React, { Component } from 'react';
import receipt from "./product_type/product_picture/receipt.png"
import './finalpage.scss'
class Finalpage extends Component {
    state = { 
        last : [

        ],
     }
    render() { 
        return (  
            <div>
         <div className ="receipt">    
          <div className = 'receipt_detail'>
            <span> 
               {this.props.nameInput[0]}<br />
               {this.props.nameInput[1]}<br />
               {this.props.nameInput[2]}<br />
               </span>
               </div>
            <div className = 'receiptPrice'>
            
             Your Money : {this.props.coin}<br /> 
             Your Change: {this.props.tron}<br />   
             </div>
             <div className='receiptInput'>
                 <span>{this.laststate()}</span>
             </div>
             <div className ='totalPrice'>
             {this.props.price}
             </div>
             <div className = 'receipt_index'>
            <span> 
               1<br />
               2<br />
               3<br />
             </span>
             </div>



             <br />

         </div>
         <div className ='successbtn'>
             <span>Are you sure to purchase this product?</span>
             <br />
             <span className ="btn btn-success"  onClick =  {this.props.startstate}>Confirm</span>
            <span>    </span>
             <span className ="btn btn-outline-danger"  onClick =  {this.props.cancle}>Cancle</span>
             </div>  
         </div>
        );
    }
    laststate(){
        var inputlast = []
        for(var i =0;i<this.props.input.length;i++){
            if(this.props.input[i] === 5){
                inputlast.push('V')
            }
            else if(this.props.input[i]=== 10){
                inputlast.push('X')
            }
            else {
                inputlast.push(this.props.input[i])
            }
        }
        return(
            <span>{inputlast}</span>
        )
    }
    
}
 
export default Finalpage;
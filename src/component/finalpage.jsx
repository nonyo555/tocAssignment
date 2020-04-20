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
                 <span>Input :{this.laststate()}</span>
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
         <div className = 'DFAinputDetail'>
                        <span className= "badge badge-dark" >Input Detail </span>
                        <span>
                        <br/>
                        0 : Frenh Fries <br/>
                        1 : Chips
                        2 : Spiral Potato<br/>
                        A : Paprika
                        B : Salt<br/>
                        C : BBQ
                        D : Seaweed Nori<br/>
                        S : S size
                        M : M size<br/>
                        L : L size
                        V : 5 coin<br/>
                        X : 10 coin
                        </span>
                    </div>
         <div className ='successbtn'>
             <span className ="btn btn-secondary">Are you sure to purchase this product?</span>
             <br /><br />
             <span className ="btn btn-success"  onClick =  {this.props.startstate}>Confirm</span>
            <span>    </span>
             <span className ="btn btn-danger"  onClick =  {this.props.cancle}>Cancle</span>
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
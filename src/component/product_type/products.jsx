import React, { Component } from 'react';
import iu from './product_picture/IU.jpg';
import dog from './product_picture/dog.jpg'
import cat from './product_picture/cat.jpg'
import './products.scss';
class  Products extends Component {
    render() {       
        console.log("props",this.props.value);
        return(
            <div>
           <span>{ this.createOption()}</span>
           </div>
        )    
    }
    createOption() {
            var prod_image 
            if ( this.props.id  === 1 ){
                prod_image  = iu
            }
            else if( this.props.id  ===2 ){
                prod_image = dog
            }
            else if( this.props.id  ===3 ){
                prod_image  = cat
            }
            else {
                prod_image  = iu
            }
            return (    <div className="product-box">
            <img src = {prod_image } className = 'imageIU'/>
            <div className="information">
            <div className="name">{this.props.value}</div>
            <div className="store">ikea.com</div>
            <a href="#" className="button" onClick={this.props.nextstate}>Purchase Product</a>
        </div> 
        </div> )
    }
    changePage(){
       
    }
}
export default Products ;
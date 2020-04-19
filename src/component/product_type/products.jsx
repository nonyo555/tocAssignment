import React, { Component } from 'react';
import iu from './product_picture/IU.jpg';
import dog from './product_picture/dog.jpg'
import cat from './product_picture/cat.jpg'
import fenfly from './product_picture/french.png'
import chip from './product_picture/lay.png'
import spiral from './product_picture/spiral.png'
import './products.scss';
import pak from './product_picture/paprika.png'
import nacl from './product_picture/nacl.png'
import bbq from './product_picture/bbq.png'
import nori from './product_picture/nori.png'
import s from './product_picture/s.png'
import m from './product_picture/m.png'
import l from './product_picture/l.png'
import ha from './product_picture/5.png'
import sib from './product_picture/10.png'
class  Products extends Component {
    render() {       
        return(
            <div>
           <span>{ this.createOption()}</span>
           </div>
        )    
    }
    createOption() {
            var prod_image 
            if ( this.props.id  === 1 ){
                prod_image  = fenfly
            }
            else if( this.props.id  ===2 ){
                prod_image = spiral
            }
            else if( this.props.id  ===3 ){
                prod_image  = chip
            }
            else if( this.props.id  ===4 ){
                prod_image  = pak
            }
            else if( this.props.id  ===5 ){
                prod_image  = nacl
            }
            else if( this.props.id  ===6 ){
                prod_image  = bbq
            }
            else if(this.props.id ===15){
                prod_image = nori
            }
            else if(this.props.id === 7||this.props.id===8||this.props.id===9){
                if( this.props.id  ===7 ){
                    prod_image  = s
                }
                else if( this.props.id  ===8 ){
                    prod_image  = m
                }
                else if( this.props.id  ===9 ){
                    prod_image  = l
                }
                return(
                    <div className="product-box">
                    <img src = {prod_image } className = 'imageIU'/>
                    <div className="information">
                    <div className="name">{this.props.value}</div>
                    <a href="#" className="button" onClick={()=>{this.props.setsize(this.props.input,this.props.value);this.props.nextstate();}}>Purchase Product</a>
                </div>
                </div>)
            }
            else if(this.props.id === 11 ||this.props.id===12){
                if(this.props.id ===11){
                    prod_image = ha
                }
                else{
                    prod_image = sib
                }
                return(
                <div className="product-box">
                <img src = {prod_image } className = 'imageIU'/>
                <div className="information">
                <div className="name">{this.props.value}</div>
                <a href="#" className="button" onClick={()=>{this.props.test(this.props.input,this.props.value);this.props.addmoney(this.props.input);}}>Purchase Product</a>
            </div>
            </div>)
            }
            else {
                prod_image  = iu
            }
            return (    <div className="product-box">
            <img src = {prod_image } className = 'imageIU'/>
            <div className="information">
            <div className="name">{this.props.value}</div>
            <a href="#" className="button" onClick={()=>{this.props.test(this.props.input,this.props.value)}}>Purchase Product</a>
        </div>
        </div>
        )
    }
    changePage(){
       
    }
}
export default Products ;
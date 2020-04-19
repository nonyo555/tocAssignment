import redarrow from './product_picture/redarrow.png' 
import fenfly from './product_picture/french.png'
import chip from './product_picture/lay.png'
import spiral from './product_picture/spiral.png'
import pak from './product_picture/paprika.png'
import nacl from './product_picture/nacl.png'
import bbq from './product_picture/bbq.png'
import nori from './product_picture/nori.png'
import s from './product_picture/s.png'
import m from './product_picture/m.png'
import l from './product_picture/l.png'
import ha from './product_picture/5.png'
import sib from './product_picture/10.png'
import React from 'react'
import './states.scss'
function States(input){
    var img ;
    var arr = redarrow;
    if (input.each === '0'){
        img = fenfly
    }
    else if (input.each === '1'){
        img = spiral
    }
    else if (input.each === '2'){
        img = chip
    }
    else if (input.each === 'A'){
        img =pak
    } 
    else if (input.each === 'B'){
        img =nacl
    } 
    else if (input.each === 'C'){
        img = bbq
    } 
    else if (input.each === 'D'){
        img =nori
    } 
    else if (input.each === 'S'){
        img =s
    }     
    else if (input.each === 'M'){
        img =m
    }     
    else if (input.each === 'L'){
        img =l
    }      
    else if (input.each === 5){
        img = ha
    }   
    else if (input.each ===  10){
        img = sib
    }
    
    return (
        <div className ='stateBox'>
        <div className = 'box'>
    <span >{arrstate(input.each)}</span>
        </div>
        <div className = 'box'>
        <img src = {img} className  = 'img'/>
        </div>
        </div>
    );
}
function arrstate(x){
    if (x === '0' || x ==='1' || x ==='2'){
        return(
            <div className ='inputText'>
        <span className = 'badge badge-danger'>INPUT</span> 
         </div>
        )
    }
    else
        return(
            <img className  = 'arrow' src ={redarrow}  />
        )
}
export default States;
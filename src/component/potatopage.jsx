import React, { Component } from 'react';
import Products from './product_type/products' 
import './potatopage.scss'
import { CSSTransition } from 'react-transition-group';
class  Potatopage extends Component {
    state = {
        counters: [
            {id :1 , name:"French Fries"},
            {id :2 , name:"Spiral Potato"},
            {id :3 , name:"Poatato Chip"},
        ]
      };
    render() { 
        return (    
            <div><CSSTransition
            timeout ={600}
            classNames = "fade">
            <div className= 'productBox'>
            {this.state.counters.map(counter => (
              <Products page = {this.props.page} nextstate = {this.props.nextstate} key={counter.id} id={counter.id} value = {counter.name} selected = {true} />
            )
            )}
            </div>
            </CSSTransition>
            </div>
         );
    }
}
export default Potatopage ;

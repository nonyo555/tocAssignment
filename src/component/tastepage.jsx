import React, { Component } from 'react';
import Products from './product_type/products' 
import './tastepage.scss'
import { CSSTransition } from 'react-transition-group';
class  Tastepage extends Component {
    state = {
        counters: [
            {id :4 , name:"Paprika"},
            {id :5 , name:"Salt"},
            {id :6, name:  "BBQ"},
            {id :7 , name:"Seaweed nori"}
        ]
      };
    render() { 
        return (    
            <div>
              <CSSTransition
            in = {true}
            appear ={true}
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
export default Tastepage ;

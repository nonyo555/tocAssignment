import React, { Component } from 'react';
import Products from './product_type/products' 
import './coinpage.scss'
import {CSSTransition} from 'react-transition-group'
class  Coinpage extends Component {
    state = {
        counters: [
            {id :11 , name:"5 Coin"},
            {id :12 , name:"10 Coin"},
        ]
      };
    render() { 
        return (    
            <div><CSSTransition
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
export default Coinpage ;

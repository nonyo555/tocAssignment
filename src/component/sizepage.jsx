import React, { Component } from 'react';
import Products from './product_type/products' 
import './sizepage.scss'
import { CSSTransition } from 'react-transition-group';
class  Sizepage extends Component {
    state = {
        counters: [
            {id :7 , name:"S Size"},
            {id :8 , name:"M Size"},
            {id :9 , name:"L Size"},
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
export default Sizepage ;

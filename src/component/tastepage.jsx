import React, { Component } from 'react';
import Products from './product_type/products' 
import './tastepage.scss'
import { CSSTransition } from 'react-transition-group';
class  Tastepage extends Component {
    state = {
        counters: [
            {id :4 , name:"Paprika",input:"A"},
            {id :5 , name:"Salt",input:"B"},
            {id :6, name:  "BBQ",input:"C"},
            {id :15 , name:"Seaweed nori",input:"D"}
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
            <div className= 'productBox2'>
            {this.state.counters.map(counter => (
              <Products page = {this.props.page} nextstate = {this.props.nextstate} key={counter.id} input={counter.input} id={counter.id} value = {counter.name} selected = {true} test={this.props.test}/>
            )
            )}
            </div>
            </CSSTransition>
            </div>
         );
    }
}
export default Tastepage ;

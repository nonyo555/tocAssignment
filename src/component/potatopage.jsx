import React, { Component } from 'react';
import Products from './product_type/products' 
import './potatopage.scss'
import { CSSTransition } from 'react-transition-group';
class  Potatopage extends Component {
    state = {
        counters: [
            {id :1 , name:"French Fries",input:"0"},
            {id :2 , name:"Spiral Potato",input:"1"},
            {id :3 , name:"Poatato Chip",input:"2"},

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
              <Products page = {this.props.page} nextstate = {this.props.nextstate} key={counter.id} input={counter.input} id={counter.id} value = {counter.name} selected = {true} test={this.props.test} />
            )
            )}
            </div>
            </CSSTransition>
            </div>
         );
    }
}
export default Potatopage ;

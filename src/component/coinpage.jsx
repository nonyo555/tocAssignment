import React, { Component } from 'react';
import Products from './product_type/products' 
import './coinpage.scss'
import {CSSTransition} from 'react-transition-group'
class  Coinpage extends Component {
    state = {
        counters: [
            {id :11 , name:"5 Coin",input:5},
            {id :12 , name:"10 Coin",input:10},
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
              <Products page = {this.props.page} addmoney={this.props.addmoney} nextstate = {this.props.nextstate} input={counter.input} key={counter.id} id={counter.id} value = {counter.name} selected = {true}test={this.props.test} />
            )
            )}
            </div>
            </CSSTransition>
            </div>
         );
    }
}
export default Coinpage ;

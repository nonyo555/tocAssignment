import React, { Component } from 'react';
import Potatopage from './potatopage'
import Sizepage from './sizepage'
import Tastepage from './tastepage'
import Coinpage from './coinpage'
import Finalpage from './finalpage'
import './apppage.scss'
import {CSSTransition} from 'react-transition-group'
import firebasedb from './product_type/db/firebasedb';

class AppPage extends Component {
    state = {
        page : 0,
      }
    nextstate= ()=>{
        this.setState( {page :this.state.page+ 1})
    }
    startstate= ()=>{
        this.setState( {page : 0})
    }
    backstate = () =>{
    this.setState({ page: this.state.page -1 })
    }
    // detailstate= () =>{
    //     this.setState( {beforepage :this.state.page})
    //     this.setState( {page :2})
    //     }
    render() { 
        return (  
            <div className='main'>
            <script src="/__/firebase/7.13.1/firebase-app.js"></script>
            <script src="/__/firebase/7.13.1/firebase-analytics.js"></script>
            <script src="/__/firebase/init.js"></script>
                  <header className="App-header">
  
                        
                     
                    <div className='subjectName'>
                  <span className = "badge badge-primary">Theroy of Computation</span>
                    </div>
                  {/* <span className = "badge badge-warning" onClick= {this.detailstate}>?</span> */}
                  <span className='backButton'>{this.performbackButton()}</span>
            </header>
                <span>{this.switchPage()}</span>

            </div>
        );
    }
    switchPage(){
        
        if(this.state.page === 0){
            //HomePage
            return (
                <div className = 'Home'>
                    <h1>App Name</h1>
                    <h2>
                        bah  bah bah  bah 
                    </h2>
                    <div className = 'startButton'>
                    <button className= "badge badge-warning" onClick = {this.nextstate}>Let's Get Start</button>
                    </div>
                </div>         
                )
        }
        else if (this.state.page === 1){
        return (
            <CSSTransition
            in = {true}
            appear ={true}
            timeout ={600}
            classNames = "fade">
            <Potatopage  page = {this.state.page} nextstate = {this.nextstate}/>
            </CSSTransition>
        )
        }
        else if (this.state.page ===2 ) {
        //Model Detaail (?) sign 
         return(
            <Tastepage  page = {this.state.page} nextstate = {this.nextstate}/>

            );
        }
        else if (this.state.page ===3 ) {
            //Model Detaail (?) sign 
             return( 
                <Sizepage  page = {this.state.page} nextstate = {this.nextstate}/>

                );
            }
            else if (this.state.page ===4 ) {
                //Model Detaail (?) sign 
                 return(           
                    <Coinpage  page = {this.state.page} nextstate = {this.nextstate}/>

                    );
                }
            else if (this.state.page ===5 ) {
                    //Model Detaail (?) sign 
                     return(           
                        <Finalpage  page = {this.state.page} startstate = {this.startstate}/>
                        );
                    }    
        
    }
    performbackButton(){
        if(this.state.page !== 0){
            return (
                <span className = "badge badge-primary" onClick = {this.backstate}>back</span>
            );
        }
    }


}
 
export default AppPage;
import React, { Component } from 'react';
import Potatopage from './potatopage'
import Sizepage from './sizepage'
import Tastepage from './tastepage'
import Coinpage from './coinpage'
import Finalpage from './finalpage'
import './apppage.scss'
import {CSSTransition} from 'react-transition-group'
import firebasedb from './product_type/db/firebasedb';
import Card from './product_type/card'
import logo  from './product_type/product_picture/Logo.png'
import mc from './product_type/product_picture/mc.png'
import fullDFA from './product_type/product_picture/DFA2.png'
class AppPage extends Component {
    state = {
        howpage : 1,
        page : 0,
        input : [

        ],
        nameInput:[

        ],

        coin : 0,
        size : '',
        price:0,
        tron :0,
        
      }
    nextstate= ()=>{
        this.setState( {page :this.state.page+ 1})
    }
    back2state= ()=>{
        this.setState( {page :-2})
    }
    samestate = ()=>{
        this.setState( {page :this.state.page})
    }
    addmoney=(x)=>{
        this.setState(state=>{
            state.coin += x/2
            if(state.coin >= state.price){
                state.tron = state.coin - state.price
                this.nextstate()
            }
            else
                this.samestate()
            //state.input.push(x)
        })
    }
    startstate= ()=>{
        if (this.state.page === 5)
         {alert("Your order has success")}
        this.setState( {
            page : 0,
            input:[],
            nameInput : [],
            coin : 0,
            price :0,
            size :0,
            tron:0,
            howpage: 0
        })
    }
    cancle =() =>{
        this.setState( {
            page : 0,
            input:[],
            nameInput : [],
            coin : 0,
            price :0,
            size :0,
            tron:0})
    }
    backstate = () =>{
    if(this.state.page === 4){
        this.state.input.splice(2,8)
        this.state.nameInput.splice(2,8)
        this.setState(state =>{
            state.size = 0
            state.price = ""
            state.coin = 0
        })
    }
    else {
        this.state.input.pop()
        this.state.nameInput.pop()
    }
    this.setState({ 
        page: this.state.page -1 ,
        coin :0
    })
    //this.setState(state=>{
    //    state.input.splice(this.state.page-2,1)
    //    state.nameInput.splice(this.state.page-2,1)
    //}
    //)
    
    console.log(this.state)
    }
    setsize = (x,y) =>{
        this.state.input.push(x)
        this.state.nameInput.push(y)
        this.setState(state=>{          
            state.size = x
            if(state.size ==="S"){
                state.price = 20
            }
            else if(state.size ==="M"){
                state.price = 30
            }
            else if(state.size ==="L"){
                state.price = 40
            }
        }
        )
        console.log(this.state)
    }
    test = (x,y) =>{
        this.state.input.push(x)
        this.state.nameInput.push(y)
        //this.setState(state=>{
        //    state.input.push(x)
        //    state.nameInput.push(y)
        //    state.input.splice(this.state.page,1)
        //    state.nameInput.splice(this.state.page,1)   
        //}
        //)
        if(this.state.page !== 4){
            this.nextstate()}
        console.log(this.state)
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
                    <div className = 'logoBox'>
                  <div  className='logo' />
                  </div>
                    <div className='subjectName'>
                    <span className = "badge badge-primary">Theory of Computation</span>
                    </div>
                  <span >{this.performbackButton()}</span>
            </header>
            <div className = 'Home'>
            <span>{this.performCard()}</span>
            <span>{this.switchPage()}</span>
            </div>
            </div>
        );
    }
    switchPage(){
        if (this.state.page === -2){
            return (
                <div className = 'modelDFA'>
                        <div >
                        <img src={fullDFA} className = 'detailDFA'></img>
                        </div>
                        <div  className= 'closeDFA'>
                        <span className='btn-danger' onClick = {this.startstate}>[ X ]</span>
                        </div>                  
                </div>
            )
        }
        if (this.state.page === -1){
         return (
             <div className = 'howto'>
                     <div  className= 'closehowto'>
                     <span className='btn-danger' onClick = {this.nextstate}>[ X ]</span>
                     </div>
             </div>
         )
         }
        else if(this.state.page === 0){
            //HomePage
            return (
                <div >
                    <div className = 'studentName'>
                    <br />
                    <h1>CE Potato</h1>
                    <h1>นำเสนอโดย</h1>
                    <h2>
                        รหัสนักศึกษา     ชื่อ-นามสกุล
                    </h2>
                    <span>
                    bah <br/>
                    bah <br/>
                    bah <br/>
                    bah <br/>
                    bah <br/>
                    คำแนะนำ : หลังจากเริ่มใช้งาน ผู้ใช้สามารถกดจอแสดงผล <br/>  
                    เพื่อสลับหน้าจอแสดงผล
                    </span>
                    </div>
                    <div  className = 'mc' > 
                    <div className = 'startButton'>
                    <span className= "badge badge-dark" onClick = {this.nextstate}>Let's Get Start</span>
                    </div>
                    </div>
                    <div className = 'DFAButton'>
                    <span className= "btn btn-dark" onClick = {this.back2state}>Look DFA Model</span>
                    </div>
                    <div className = 'DFAinputDetail'>
                        <span className= "badge badge-dark" >Input Detail </span>
                        <span>
                        <br/>
                        0 : Frenh Fries ,
                        1 : Chips,<br/>
                        2 : Spiral Potato,
                        A : Paprika,<br/>
                        B : Salt,
                        C : BBQ,<br/>
                        D : Seaweed Nori,
                        S : S size,<br/>
                        M : M size,
                        L : L size,<br/>
                        V : 5 coin,
                        X : 10 coin
                        </span>
                    </div>
                </div>         
                )
        }
        else if (this.state.page === 1){
        return (
            <Potatopage  page = {this.state.page} nextstate = {this.nextstate} test={this.test}/>
        )
        }
        else if (this.state.page ===2 ) {
        //Model Detaail (?) sign 
         return(
            <Tastepage  page = {this.state.page} nextstate = {this.nextstate} test={this.test}/>
            );
        }
        else if (this.state.page ===3 ) {
            //Model Detaail (?) sign 
             return( 
                <Sizepage  page = {this.state.page} nextstate = {this.nextstate} test={this.test} setsize={this.setsize}/>
                );
            }
            else if (this.state.page ===4) {
                //Model Detaail (?) sign 
                 return(          
                    <Coinpage  page = {this.state.page} coin ={this.state.coin} nextstate = {this.nextstate} test={this.test} price={this.state.price} addmoney={this.addmoney}/>
                    );
                }
            else if (this.state.page ===5 ) {
                    //Model Detaail (?) sign 
                    console.log(this.state)
                     return(           
                        <Finalpage input = {this.state.input} tron = {this.state.tron}coin = {this.state.coin} price = {this.state.price} page = {this.state.page} cancle = {this.cancle} startstate = {this.startstate} test={this.test} nameInput={this.state.nameInput}/>
                        );
                    }           
    }

    performbackButton(){
        if(this.state.page > 0 && this.state.page !== 5){
            return (
                <span className='backButton'>
                    <span className = "badge badge-primary" onClick = {this.backstate}>Back</span>
                </span>
                
            );}
        else if (this.state.page === 0){
        return ( <div className = 'howtoButton'>
            <span className= "badge badge-danger" onClick = {this.backstate}>How to</span>
             </div>)
        }
    }
    performCard(){
        
        if(this.state.page > 0  && this.state.page !==5  ){
            return (
                <Card list = {this.state.input} page = {this.state.page} coin = {this.state.coin}/>
            );
        }
    }

    }
export default AppPage;
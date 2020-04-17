import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import dog from './product_picture/dog.jpg'
import DFA from './product_picture/DFA.png'
import './card.scss'
import States from './states'
import start from './product_picture/start.png'
import ha from './product_picture/5.png'
import sib from './product_picture/10.png'
import fift  from './product_picture/15.png'
import twenty  from './product_picture/20.png'
import twentyF  from './product_picture/25.png'
import third  from './product_picture/30.png'
import thirdF  from './product_picture/35.png'
import fourt  from './product_picture/40.png'
import potato from './product_picture/potato.png'
import taste from './product_picture/taste.png'
import size from './product_picture/size.png'
import coin  from './product_picture/coin.png'
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
function Card(stateList) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  const fade  = useSpring({
    from : {opacity :0},
    to :{opacity:1}
  })
  
  var imgstate;
  var imgcurrent ;

  if (stateList.page === 1){
     imgcurrent = start
     imgstate = potato
  }
  else if(stateList.page === 2){
    imgcurrent = imagereturn(stateList.list[stateList.list.length -1])
    imgstate = taste
  }
  else if(stateList.page === 3){
    imgcurrent = imagereturn(stateList.list[stateList.list.length -1])
    imgstate = size
  }
  else if(stateList.page === 4){
    if (stateList.coin !== 0)
      imgcurrent = imagereturn(stateList.coin)
    else
      imgcurrent = imagereturn(stateList.list[stateList.list.length -1])
    imgstate = coin
  }
  return (
  <a.div style={fade}>
    <div  className = 'cardpage' onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
      <img src = {imgcurrent} className = 'imgcurrent' />
      <img src = {redarrow} className = 'redarrow' />
        <img src = {imgstate} className = 'imgstate' />
        <div className ='inputText'>
         <span className = 'badge badge-danger'>INPUT</span>
         </div>
         <span className = 'inputBox'> {stateList.list.map(ele =>(
            <States each = {ele} key ={ele} />
          ))}</span>
      </a.div>
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`),backgroundImage: `url(${DFA})`}} >
      </a.div>
    </div>
    </a.div>
  )
}
function imagereturn(x){
  if (x ===5) {
    return ha
 }
 else if (x===10){
  return sib
 }
 else if (x ===15){
  return fift
}
else if (x ===20){
  return twenty
}
else if (x ===25){
  return twentyF
}
else if (x ===30){
  return third
}
else if (x===35){
  return thirdF
}
else if (x === '0'){
  return fenfly
} 
else if (x === '1'){
  return spiral
} 
else if (x === '2'){
  return chip
} 
else if (x === 'A'){
  return pak
} 
else if (x === 'B'){
  return nacl
} 
else if (x === 'C'){
  return bbq
} 
else if (x === 'D'){
  return nori
} 
else if (x === 'S'){
  return s
} 
else if (x === 'M'){
  return m
} 
else if (x === 'L'){
  return l
} 
}
export default Card;
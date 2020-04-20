import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import DFA from './product_picture/TocDFA.png'
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

        <div className= 'swapIcon'>
        <svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>
        </svg>
        </div>
        
         <span className = 'inputBox'>
            {stateList.list.map(ele =>(
            <States each = {ele} key ={ele} />
          ))}</span>
      </a.div>
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`),backgroundImage: `url(${DFA})`}} >
        {performArrow(stateList.list,stateList.coin)}
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
function performArrow(statelist,coin) {
  var list = Array.from(statelist)
  var tops = "0%";
  var lefts = "0%";
  if(list.length ===0){
    tops = "26%"
    lefts = "1%"
  }

  if (list[list.length-1] === '0'){
    tops = "5%"
    lefts = "9.5%"
  }
  else if (list[list.length-1]=== '1'){
    tops = "26%"
    lefts = "9.5%"
  }
  else if (list[list.length-1]=== '2'){
    tops = "48%"
    lefts = "9.5%"
  }
  else if (list[list.length-1] === 'A'){
    tops = "3.75%"
    lefts = "20%"
  }
  else if (list[list.length-1] === 'B'){
    tops = "20%"
    lefts = "20%"
  }
  else if (list[list.length-1]=== 'C'){
    tops = "35.75%"
    lefts = "20%"
  }
  else if (list[list.length-1] === 'D'){
    tops = "53%"
    lefts = "20%"
  }
  else if (list[list.length-1] === 'S'){
    tops = "5%"
    lefts = "34%"
  }
  else if (list[list.length-1]=== 'M'){
    tops = "30%"
    lefts = "34%"
  }
  else if (list[list.length-1] === 'L'){
    tops = "54%"
    lefts = "34%"
  }
  else if (list[list.length-1] ===5  ||list[list.length-1]  === 10)
  {
    if (list[2] === 'S'){
        if(coin === 5){
          tops = "-1%"
          lefts = "43.5%"
        }
        else if(coin === 10){
          tops = "12%"
          lefts = "43%"
        }
        else if(coin === 15){
          tops = "-1%"
          lefts = "52%"
        }
    }
    else if (list[2] === 'M'){
      if(coin === 5){
        tops = "24.5%"
        lefts = "43.5%"
      }
      else if(coin === 10){
        tops = "35.5%"
        lefts = "43.5%"
      }
      else if(coin === 15){
        tops = "23.5%"
        lefts = "52%"
      }
      else if(coin === 20){
        tops = "35.5%"
        lefts = "52%"
      }
      else if(coin === 25){
        tops = "26%"
        lefts = "59%"
      }
    }
    else if (list[2] === 'L'){
      if(coin === 5){
        tops = "47.5%"
        lefts = "43.5%"
      }
      else if(coin === 10){
        tops = "60.5%"
        lefts = "43.5%"
      }
      else if(coin === 15){
        tops = "47.5%"
        lefts = "52%"
      }
      else if(coin === 20){
        tops = "60.5%"
        lefts = "52%"
      }
      else if(coin === 25){
        tops = "47.5%"
        lefts = "59%"
      }
      else if(coin === 30){
        tops = "60.5%"
        lefts = "59%"
      }
      else if(coin === 35){
        tops = "47.5%"
        lefts = "67%"
      }
    }

  }
  return (
    <img src ={redarrow} style ={{position: "absolute",top :tops,left:lefts}} className ='stateArrow'/>
  )

}
export default Card;
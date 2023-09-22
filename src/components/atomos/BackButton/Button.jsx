import React from 'react'
import back from "../../../images/back.svg";
import './Button.css'

function Button({ funcion}) {
  return (
    <button onClick={funcion} >
        <img src={back} className='back'/>
    </button>
  )
}

export default Button
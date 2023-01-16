import React from "react";
import '../StyleSheets/button.css'

function Button({texto, ButtonClick, ClickScript}) {
  return(
    <button 
    className={ ButtonClick ? 'button-click' : 'button-reset'} 
    onClick = {ClickScript}>
      {texto}
    </button>
  )
  
}

export default Button
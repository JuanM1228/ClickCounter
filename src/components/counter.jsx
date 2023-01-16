import React from "react";
import '../StyleSheets/counter.css'
function Counter({countClicks}){
  return(
    <div className="counter">
      {countClicks}
    </div>
  )
}
export default Counter
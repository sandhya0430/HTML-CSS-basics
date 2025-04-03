import React from 'react'

function functionClick() {
    function clickHandler(){
        console.log('Button Clicked')
    }
  return (
    <div>
        <button onClick={clickHandler()}>Click</button>
      
    </div>
  )
}

//  <button onClick={clickHandler()}>Click</button> this becomes function call
//  <button onClick={clickHandler}>Click</button> this becomes function reference

export default functionClick


 "use strict";
 import React from 'react'

function Hello() {
  const counter: number = 1
  const sayHello = () => {
    console.log("Hello World")
  }
  return (
    <div>
      <button type="button" onClick={sayHello}> {counter} </button>
    </div>
  )
}

export default Hello

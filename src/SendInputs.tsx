import React, { useState } from 'react'
import { SendMessage } from './requests.jsx'

const SendInputs = (props: any) => {
  const [inputValue, setInputValue] = useState("")

  const handleInput = (event: any) => {
    setInputValue(event.target.value)
  }


  const postValue = () => {
    SendMessage(props.valueUser, props.receiver, inputValue)
  }

  return (
    <div className="inputs">
      <input type="text" className="sendInput textInput" onChange={handleInput} />
      <button type="button" className="sendButton button" onClick={postValue}> Send </button>
    </div>
  )
}

export default SendInputs

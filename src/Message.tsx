import React from 'react'

const Message = (props: any) => {
  const sender: string = props.data.sender
  const text: string = props.data.content
  const user: string = props.user

  return (
    <div className={`message ${user === sender ? "messageRigth" : "messageLeft"}`}>
      {text}
    </div>
  )
}

export default Message

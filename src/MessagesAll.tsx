import React from 'react'
import Message from './Message'
import { GetWithFilter } from './requests.jsx'

export const MessagesAll = (props: any) => {
  const { messages } = GetWithFilter(props.sender, props.receiver)
  console.log("MessagesAll: data: ", messages)
  console.log(messages)
  if (props.receiver === "") {
    return (
      <div className="messages" >
        <span className="noMessagesText">To start chatting select a receiver</span>
      </div>
    )
  } else {
    return (
      <div className="messages">
        <h3>{props.receiver} </h3>
        {!messages ? "loading" : messages.map((content: any) => (
          <Message data={content} user={props.valueUser} key={content._id} />
        ))}
      </div>
    )
  }
}

export default MessagesAll

import React, { useState } from 'react'
import { AddFriendRequest } from './requests'

export const FriendAdd = (props: any) => {

  const [friend, setFriend] = useState("")
  const sendFriend = () => {
    AddFriendRequest(props.user, friend)
    props.toggleFriendAdded()
  }

  const changeFriend = (event: any) => {
    setFriend(event.target.value)
  }

  return (
    <div className="friendAdd">
      <input className="friendAddInput textInput" type="text" onChange={changeFriend} placeholder="Friend Name"></input>
      <button type="button" className="friendAddButton button" onClick={sendFriend}>Add friend</button>
    </div>
  )
}




export default FriendAdd

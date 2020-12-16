import React from 'react'
import { AddFriend, RemoveFriendRequest } from './requests'

const FriendRequest = (props: any) => {
  const acceptFriend = (newFriend: string) => {
    AddFriend(props.valueUser, newFriend)
  }

  const declineFriend = (friendToRemove: string) => {
    RemoveFriendRequest(props.valueUser, friendToRemove)
  }

  return (
    <div className="friendRequests">
      <span>{props.name} {props.date} </span>
      <button type="button" onClick={() => {
        declineFriend(props.name)
      }} className="friendRequestButton button"> ⤬ </button>
      <button type="button" onClick={() => {
        acceptFriend(props.name)
      }} className="friendRequestButton button"> ✓ </button>
    </div>
  )
}

export default FriendRequest

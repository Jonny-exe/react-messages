import React from 'react'
import { GetProfileImage } from './requests.jsx'

function Friend(props: any) {
  const setReceiver = () => {
    props.setReceiver(props.name)
  }

  var { picture } = GetProfileImage(props.name)
  console.log("Friend: picturea", picture)
  return (
    <div className="friend" onClick={setReceiver}>
      <h3> {props.name} <img className="friendPicture" src={picture} alt="Image"></img></h3>
    </div>
  )
}

export default Friend

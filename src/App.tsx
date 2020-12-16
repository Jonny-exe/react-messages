import React, { useState } from 'react'
import './App.css'
import SendInput from './SendInputs'
import MessagesAll from './MessagesAll'
import Login from './Login'
import Friends from './Friends'
import Logo from './Logo'
import { AddUser } from './requests.jsx'

const App = () => {
  // postRequest("this is the test", "this is the new test")
  const [user, setUser] = useState("")
  const [receiver, setReceiver] = useState("")
  const [friendAdded, setFriendAdded] = useState(false) //This is just a value to toggle when a friend gets added so the apt gets fetched

  const toggleFriendAdded = () => {
    setFriendAdded(!friendAdded)
  }

  const storeUser = (userName: string) => {
    localStorage.setItem("user", userName)
    setUser(userName)
  }

  const saveUser = (username: string, password: string) => {
    storeUser(username)
    AddUser(username, password)
  }


  const login = (username: string) => {
    storeUser(username)
  }

  const logOut = () => {
    console.log("App: logOut")
    setUser(undefined)
  }

  const setReceiverFunc = (name: string) => {
    setReceiver(name)
  }

  return (
    <div>
      <div className="app">
        <div className="friends">
          <Logo valueUser={user} valueReciever={receiver}/>
          <Friends friendAdded={friendAdded} valueUser={user} setReceiver={setReceiverFunc} valueReceiver={receiver} />
        </div>
        <div className="messages">
          <MessagesAll valueUser={user} sender={user} receiver={receiver} />
          <SendInput valueUser={user} receiver={receiver} />
        </div>
        <div className="float">
          <Login login={login} logOut={logOut} toggleFriendAdded={toggleFriendAdded} storeUser={storeUser} saveUser={saveUser} valueUser={user} />  {/* This makes it possible to speak from child to child. Pases data: user from login to sendInput*/}
        </div>
      </div>
    </div>
  )
}

export default App

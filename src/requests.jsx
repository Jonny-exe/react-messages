import { useEffect, useState } from "react";
// This is just to have different test and production urls
// const url = "http://localhost:5000/";
const url = process.env.REACT_APP_REQUEST_URL
console.log(process.env)
const headersContent = {
  // "Origin" : "http://localhost:3000"
  // "Access-Control-Allow-Credentials": "true",
  // "Access-Control-Allow-Origin": "*",
  // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
  // "Access-Control-Max-Age": "1000",
  // "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
  // "Content-Type": "application/jso
}
export const SendMessage = (userContent, reciverContent, textContent) => {
  console.log("This is the texxt content: " + textContent)
  const thisURL = url + "addmessage"
  var bodyContent = {
    sender: userContent,
    receiver: reciverContent,
    content: textContent
  }
  fetch(thisURL, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(res => res.json()).then(resJson => {
    console.log("SendMessage: ", resJson)
    return resJson
  })
}

export const UploadProfileImage = (user, image, areaToCrop) => {
  const thisURL = url + "uploadprofileimage"
  const bodyContent = {
    name: user,
    image: image,
    areatocrop: areaToCrop
  }
  console.log("UploadProfileImage", bodyContent)
  fetch(thisURL, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(res => res.json()).then(resJson => {
    console.log("SendMessage: ", resJson)
    return resJson
  })
}

export const GetProfileImage = (user) => {
  const [state, setState] = useState({ picture: null, loading: true })
  const thisURL = url + "getprofileimage"
  useEffect(() => {
    var bodyContent = {
      name: user
    }
    console.log("GetProfileImage: bodyContent: ", bodyContent)
    setState(state => ({ picture: state.picture, loading: true }))
    fetch(thisURL, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetProfileImage: got image")
      setState({ picture: json, loading: false })
    })
  }, [user])
  return state
}

export const UserLogin = (finalUser, finalPassword) => {
  const [state, setState] = useState({ successfulLogin: null, loginLoading: true })
  const thisURL = url + "login"
  useEffect(() => {
    var bodyContent = {
      name: finalUser,
      pass: finalPassword
    }
    console.log("Login: bodyContent: ", bodyContent)
    setState({ successfulLogin: null, loginLoading: true })
    fetch(thisURL, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("UserLogin: json data", json)
      if (json != null) {
        console.log("UserLogin: json set")
        setState({ successfulLogin: json, loginLoading: false })
      }
    })
  }, [finalPassword])
  return state
}

export const DoesUserExist = (newUser) => {
  const thisURL = url + "doesuserexist"
  const [state, setState] = useState({ doesUserExist: null, registerLoading: true })
  useEffect(() => {
    var bodyContent = {
      name: newUser
    }
    console.log("DoesUserExist: bodyContent: ", bodyContent, newUser)
    setState({ doesUserExist: null, registerLoading: true })
    fetch(thisURL, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("DoesUserExist: json data", json, newUser)
      setState({ doesUserExist: json, registerLoading: false })
    })
  }, [newUser])
  return state
}

export const GetFriendRequests = (user) => {
  const thisURL = url + "getfriendrequests"
  const [state, setState] = useState({ requests: null, loading: true })
  useEffect(() => {
    var bodyContent = {
      name: user
    }
    console.log("GetFriendRequests: bodyContent: ", bodyContent)
    setState(state => ({ requests: state.requests, loading: true }))
    fetch(thisURL, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetFriendRequests: json data: ", json)
      setState({ requests: json, loading: false })
    })
  }, [])
  return state
}

export const GetWithFilter = (filterSender, filterReceiver) => {
  const [state, setState] = useState({ messages: null, loading: true })
  const thisURL = url + "getwithfilter"
  useEffect(() => {
    var bodyContent = {
      sender: filterSender,
      receiver: filterReceiver
    }
    setState(state => ({ messages: state.messages, loading: true }))
    fetch(thisURL, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetWithFilter: json data: ", json)
      setState({ messages: json, loading: false })
    })
  }, [filterReceiver, filterSender])
  return state
}


export const AddFriend = (userContent, newFriendContent) => {
  const thisURL = url + "addfriend"
  var bodyContent = {
    name: userContent,
    newFriend: newFriendContent
  }

  console.log("AddFriend: ", bodyContent)
  fetch(thisURL, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(json => {
    console.log("AddFriend: ", json)
    return json
  })
}

export const AddFriendRequest = (userContent, newFriendContent) => {
  const thisURL = url + "addfriendrequests"
  var bodyContent = {
    name: userContent,
    newFriend: newFriendContent
  }

  console.log("AddFriendRequest: ", bodyContent)
  fetch(thisURL, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(json => {
    console.log("AddFriendRequest: ", json)
    return json
  })
}

export const RemoveFriendRequest = (user, friendToRemove) => {
  const thisURL = url + "removefriendrequest"
  var bodyContent = {
    name: user,
    FriendToRemove: friendToRemove
  }

  console.log("RemoveFriendRequest: ", bodyContent)
  fetch(thisURL, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(json => {
    console.log("RemoveFriendRequest: ", json)
    return json
  })
}

export const AddUser = (username, password) => {
  const thisURL = url + "adduser"
  var bodyContent = {
    name: username,
    pass: password,
    friends: [],
    friendRequests: [],
    profileImage: ""
  }
  console.log("AddUser: bodyContent: ", bodyContent)
  fetch(url, {
    method: 'POST',
    headers: headersContent,
    credentials: 'same-origin',
    body: JSON.stringify(bodyContent)
  }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
    console.log("AddUser: ", json)
    return json
  })
}

export const GetFriends = (user, friendAdded) => {
  const [state, setState] = useState({ friends: null })
  const thisURL = url + "getfriends"

  useEffect(() => {
    var bodyContent = {
      name: user
    }
    setState(state => ({ friends: state.friends }))
    fetch(thisURL, {
      method: 'POST',
      headers: headersContent,
      credentials: 'same-origin',
      body: JSON.stringify(bodyContent)
    }).then(data => data.text()).then(text => JSON.parse(text)).then(json => {
      console.log("GetFriends: ", json)
      setState({ friends: json })
    })
  }, [user, friendAdded])

  return state
}

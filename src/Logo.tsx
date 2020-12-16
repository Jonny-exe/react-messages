import React, { useState, useEffect } from 'react'
import { UploadProfileImage, GetProfileImage } from './requests.jsx'
import Croper from './Croper'

const Logo = (props: any) => {
  const [image, setImage] = useState(null)
  const [modal, setModal] = useState(false)
  const [areaToCrop, setAreaToCrop] = useState({})

  var { picture } = GetProfileImage(props.valueUser)
  useEffect(() => {
    if (props.valueUser != null) {
      setImage(picture)
    }
  }, [picture])
  const sendFile = () => {
    UploadProfileImage(props.valueUser, image, areaToCrop)
  }

  const handleAreaToCrop = (data: object) => {
    console.log(data)
    setAreaToCrop(data)
  }

  const handleFile = (e: any) => {
    let image = e.target.files[0]

    let reader = new FileReader()
    console.log("Logo: image", image)
    reader.readAsDataURL(image)
    reader.onload = (e: any) => {
      let base64 = e.target.result
      console.log(base64)
      setImage(base64)
    }
  }

  const imageOnClick = () => {
    console.log("Logo: imageOnClick: modal", true)
    setModal(true)
  }

  const closeModal = () => {
    console.log("Logo: imageOnClick: modal", false)
    setModal(false)
  }


  return (
    <div>
      <div className={`overlay ${modal ? "overlayActive" : ""}`} onClick={closeModal}>
      </div>
      <div className="userName">
        <span className="currentUser">{props.valueUser == "null" ? "Please log in or register" : props.valueUser}</span>
      </div>
      <img src={image} onClick={imageOnClick} className="profileImage" ></img>
      <div className={`modal ${modal ? "modalActive" : ""}`}>
        <div className="modalHeader">
          <h3> Resise your image </h3>
          <button type="button" className="closeHeaderButton" onClick={closeModal}>&times;</button>
        </div>
        <div className="modalBody">
          <div>
            <div className="fileInputContainer">
              <input type="file" onChange={handleFile} className="changeProfileImage uploadImageInput" name="image" />
            </div>
            <button type="button" className="sendFile" onClick={sendFile}>Upload File</button>
          </div>
          <div className="croper">
            <Croper handleAreaToCrop={handleAreaToCrop} image={image} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo

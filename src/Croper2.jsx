import React, {useState} from 'react'
import Cropper from 'react-easy-crop'
import Slider from 'react-easy-crop'

const Croper = (props) => {
  const [state, setState] = useState({
    crop: {
      x: 0,
      y: 0
    },
    zoom: 0.5,
    aspect: 16 / 9
  })

  const onCropChange = (crop) => {
    setState({crop})
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }

  const onZoomChange = (zoom) => {
    setState({zoom})
  }
  console.log(state, state.crop)
  return (<div className="cropContainer">
    hello
    <Cropper image={props.image} crop={state.crop} zoom={state.zoom} aspect={state.aspect} onCropChange={onCropChange} onCropComplete={onCropComplete} onZoomChange={onZoomChange}/>
  </div>)
}

export default Croper

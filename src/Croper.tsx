import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'

const Croper = (props: any) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete = useCallback((croppedAreaPixels) => {
    console.log(croppedAreaPixels)
    props.handleAreaToCrop(croppedAreaPixels)
    // props.crop(croppedAr ea, croppedAreaPixels)
  }, [])
  return (
    <div>
      <div className="crop-container">
        <Cropper image={props.image} crop={crop} zoom={zoom} aspect={1 / 1} onCropChange={setCrop} onCropComplete={onCropComplete} onZoomChange={setZoom} />
      </div>
      <div className="controls">
      </div>
    </div >)
}

export default Croper

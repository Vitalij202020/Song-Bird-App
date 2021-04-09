import React from "react"
import ReactAudioPlayer from "react-audio-player"
import "./Audio.css"

const Audio = (props) => {
  return (
    <div className="audio-player">
      <ReactAudioPlayer className="audio-player" src={props.audio} autoPlay={false} controls style={{ width: "80%", height: "35px" }} />
    </div>
  )
}

export default Audio

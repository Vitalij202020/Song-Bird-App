import React from 'react'
import Audio from './../Audio/Audio'

const PlayTask = (props) => {
  const {currentData, RandomBird, activeNext, questionMark} = props.state
  const randomBird = currentData.filter((item) => RandomBird === item.id)
  return (
    <div className="random-bird jumbotron rounded">
      <img className="bird-image" src={activeNext ? randomBird[0].image : questionMark} alt="bird"></img>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{activeNext ? randomBird[0].name : '******'}</h3>
          </li>
          <li className="list-group-item">
            <Audio audio={randomBird[0].audio} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PlayTask

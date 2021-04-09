import React from 'react'
import Audio from '../Audio/Audio'
import './InfoBird.css'

const InfoBird = (props) => {
  const {currentInfoBird} = props.state
  return (
    <div className="col-md-6">
      <div className="bird-details card">
        {currentInfoBird ? (
          <>
            <div className="card-body" style={{display: 'flex'}}>
              <img className="bird-image" src={currentInfoBird.image} alt={currentInfoBird.name} />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h4>{currentInfoBird.name}</h4>
                </li>
                <li className="list-group-item">
                  <span>{currentInfoBird.species}</span>
                </li>
                <li className="list-group-item">
                  <div className="audioPlayer">
                    <Audio audio={currentInfoBird.audio} />
                  </div>
                </li>
              </ul>
            </div>
            <span className="bird-description" style={{display: 'flex'}}>
              {currentInfoBird.description}
            </span>
          </>
        ) : (
          <p className="instruction" style={{display: 'block'}}>
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default InfoBird

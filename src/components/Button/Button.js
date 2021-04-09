import React from "react"

const Button = ({ activeNext, clickNext }) => {
  return (
    <>
      <button className={`btn ${activeNext ? "btn-next" : ""}`} onClick={activeNext ? clickNext : null}>
        Next Level
      </button>
    </>
  )
}

export default Button

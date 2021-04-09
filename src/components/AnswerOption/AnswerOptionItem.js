import React from "react"

const AnswerOptionItem = (props) => {
  return (
    <li className={`list-group-item ${props.success}  ${props.error}`} onClick={props.clickAnswer}>
      <span className="li-btn"></span>
      {props.name}
    </li>
  )
}

export default AnswerOptionItem

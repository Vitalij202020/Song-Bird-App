import React from "react"
import AnswerOptionItem from "./AnswerOptionItem"

const AnswerOption = (props) => {
  return (
    <div className="col-md-6">
      <ul className="item-list list-group">
        {props.state.currentData.map((item, index) => (
          <AnswerOptionItem
            key={item.id}
            name={item.name}
            clickAnswer={item.clicked ? () => props.secondClickAnswer(item.id) : () => props.clickAnswer(item.id, index)}
            success={item.success ? "success" : ""}
            error={item.error ? "error" : ""}
          />
        ))}
      </ul>
    </div>
  )
}

export default AnswerOption

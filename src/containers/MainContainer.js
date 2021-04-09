import React from "react"
import Header from "../components/Header/Header"
import PlayTask from "../components/PlayTask/PlayTask"
import AnswerOption from "../components/AnswerOption/AnswerOption"
import InfoBird from "../components/InfoBird/InfoBird"
import Button from "../components/Button/Button"
import GameOver from "../components/GameOver/GameOver"

class MainContainer extends React.Component {
  render() {
    return (
      <>
        <Header state={this.props.state} />
        {this.props.state.finish ? null : <PlayTask state={this.props.state} />}
        {this.props.state.finish ? (
          <GameOver totalPoint={this.props.state.totalPoint} startGame={this.props.startGame} />
        ) : (
          <div className="row mb2">
            <AnswerOption state={this.props.state} clickAnswer={this.props.clickAnswer} secondClickAnswer={this.props.secondClickAnswer} />
            <InfoBird state={this.props.state} />
            <Button clickNext={this.props.clickNext} activeNext={this.props.state.activeNext} />
          </div>
        )}
      </>
    )
  }
}

export default MainContainer

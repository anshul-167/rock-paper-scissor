import {Component} from 'react'
import {
  MainCont,
  ScoreCont,
  Ul,
  Li,
  Button,
  PlayAgainButton,
  Img,
  H1,
  H2,
  ScoreSubCont,
  Score,
  ResultMainCont,
  ResultSubCont,
  YouCont,
  ResultHead,
} from './styling'
import RulesPopup from '../RulesPopup'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RPC extends Component {
  state = {
    score: 0,
    selectedButton: {},
    opponentButton: {},
    gameResult: '',
    gameClass: '',
    resultClass: 'hide',
  }

  onClickButton = id => {
    const randomButton = choicesList[Math.floor(Math.random() * 3)]
    const selectedOption = choicesList.find(each => each.id === id)

    this.setState({
      opponentButton: randomButton,
      selectedButton: selectedOption,
      gameClass: 'hide',
      resultClass: '',
    })
    this.result(selectedOption, randomButton)
  }

  onClickPlay = () => {
    this.setState({resultClass: 'hide', gameClass: ''})
  }

  result = (selectedButton, opponentButton) => {
    let gameResult = ''

    if (selectedButton.id === 'ROCK') {
      if (opponentButton.id === 'ROCK') {
        gameResult = 'IT IS DRAW'
      } else if (opponentButton.id === 'PAPER') {
        gameResult = 'YOU LOSE'
      } else if (opponentButton.id === 'SCISSORS') {
        gameResult = 'YOU WON'
      }
    } else if (selectedButton.id === 'PAPER') {
      if (opponentButton.id === 'ROCK') {
        gameResult = 'YOU WON'
      } else if (opponentButton.id === 'PAPER') {
        gameResult = 'IT IS DRAW'
      } else if (opponentButton.id === 'SCISSORS') {
        gameResult = 'YOU LOSE'
      }
    } else if (selectedButton.id === 'SCISSORS') {
      if (opponentButton.id === 'ROCK') {
        gameResult = 'YOU LOSE'
      } else if (opponentButton.id === 'PAPER') {
        gameResult = 'YOU WON'
      } else if (opponentButton.id === 'SCISSORS') {
        gameResult = 'IT IS DRAW'
      }
    }

    this.setState(prevState => {
      let scoreChange = 0
      if (gameResult === 'YOU WON') {
        scoreChange = 1
      } else if (gameResult === 'YOU LOSE') {
        scoreChange = -1
      }

      return {
        gameResult,
        score: prevState.score + scoreChange,
      }
    })
  }

  renderMainGame = () => {
    const {gameClass} = this.state
    return (
      <Ul gameClass={gameClass}>
        {choicesList.map(each => (
          <Li key={each.id}>
            <Button
              type="button"
              id={each.id}
              onClick={() => this.onClickButton(each.id)}
              data-testid={`${each.id.toLowerCase()}Button`}
            >
              <Img src={each.imageUrl} alt={each.id} />
            </Button>
          </Li>
        ))}
      </Ul>
    )
  }

  renderScoreCard = () => {
    const {score} = this.state
    return (
      <>
        <H1>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </H1>
        <ScoreSubCont>
          <H2>Score</H2>
          <Score>{score}</Score>
        </ScoreSubCont>
      </>
    )
  }

  renderResult = () => {
    const {gameResult, selectedButton, opponentButton, resultClass} = this.state
    return (
      <ResultMainCont resultClass={resultClass}>
        <ResultSubCont>
          <YouCont>
            <H1>YOU</H1>
            <Img src={selectedButton.imageUrl} alt="your choice" />
          </YouCont>
          <YouCont>
            <H1>OPPONENT</H1>
            <Img src={opponentButton.imageUrl} alt="opponent choice" />
          </YouCont>
        </ResultSubCont>
        <ResultHead>{gameResult}</ResultHead>
        <PlayAgainButton type="button" onClick={this.onClickPlay}>
          Play Again
        </PlayAgainButton>
      </ResultMainCont>
    )
  }

  render() {
    const {selectedButton, opponentButton, gameResult} = this.state
    console.log(selectedButton, opponentButton, gameResult)
    return (
      <MainCont>
        <ScoreCont>{this.renderScoreCard()}</ScoreCont>
        <>
          {this.renderMainGame()}
          {this.renderResult()}
        </>
        <RulesPopup />
      </MainCont>
    )
  }
}
export default RPC

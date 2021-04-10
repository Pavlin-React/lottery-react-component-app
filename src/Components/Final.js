import { Component } from 'react'
import { removeTicket } from '../Helper/actions'
import { getRandomColor } from '../Helper/utils'


class Final extends Component {

  isWinning() {
    let { tickets, winningNumber } = this.props

    for ( let ticket of tickets ) {
      if ( ticket.number === winningNumber ) {
        return true
      }
    }

    return false
  }

  renderWinning() {
    return(
      <div>
        <h1>Congratulations You just win 1 000 000 bitcoins :)</h1>
        <p>Your winning number is <b>{ this.props.winningNumber }</b></p>
      </div>
    )
  }

  renderTryAgain() {
    return(
      <div>
        <p>Please try again ?</p>
        <h1>The winning number is <b>{ this.props.winningNumber }</b></h1>
      </div>
    )
  }

  render() {
    return(
      <div style={ { backgroundColor: getRandomColor(), padding: 15 } }>
        { this.isWinning() ? this.renderWinning() : this.renderTryAgain() }
        <button onClick={ this.props.actions.reset }>Start Again</button>
      </div>
    )
  }
}

export default Final;
import { Component } from 'react'
import { removeTicket } from '../Helper/actions'
import { getRandomColor } from '../Helper/utils'
import { Button, Card } from 'antd';


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
      <Card style={ { backgroundColor: getRandomColor() } }
      title= { this.isWinning() ? this.renderWinning() : this.renderTryAgain() }>
        
        <Button type='primary' onClick={ this.props.actions.reset }>Start Again</Button>
      </Card>
    )
  }
}

export default Final;
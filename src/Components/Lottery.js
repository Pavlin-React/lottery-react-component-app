import React, { Component } from 'react'


class Lottery extends Component {
  renderButton() {
    if ( this.props.remainingTickets > 0 ) {
      return <button>Buy Ticket</button>
    }
  }

  render() {
    return(
      <div>
        <h2>Lottery</h2>
        { this.renderButton() }
        <br />
        <small>Rest: { this.props.remainingTickets }</small>
      </div>
    )
  }
}

export default Lottery;
import { Component } from 'react'


class Lottery extends Component {
  renderButton() {
    let { remainingTickets, actions } = this.props
    if ( remainingTickets > 0 ) {
      return <button onClick={ actions.registerTicket }>Buy Ticket</button>
    }
  }

  render() {
    return(
      <>
        <h2>Lottery</h2>
        { this.renderButton() }
        <br />
        <small>Rest: { this.props.remainingTickets }</small>
      </>
    )
  }
}

export default Lottery;
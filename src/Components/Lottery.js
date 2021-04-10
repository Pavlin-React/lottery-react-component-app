import { Component } from 'react'
import LotteryTicket from './LotteryTicket'

class Lottery extends Component {
  renderButton() {
    let { remainingTickets, actions } = this.props
    if ( remainingTickets > 0 ) {
      return <button onClick={ actions.registerTicket }>Buy Ticket</button>
    }

    return <button onClick={ actions.finish }>Check to win</button>
  }

  renderTickets() {
    let { tickets, actions }    = this.props
    let lotteryTicketActions    = { removeTicket: actions.removeTicket }
    let LotteryTickets          = tickets.map( (ticket, index) => {
      return (
        <LotteryTicket
          actions = { lotteryTicketActions }
          color   = { ticket.color }
          number  = { ticket.number }
          index   = { index }
          key     = { index }
        />
      )
    })
    return LotteryTickets
  }

  render() {
    return(
      <>
        <h2>Lottery</h2>
        { this.renderButton() }
        <br />
        <small>Rest: { this.props.remainingTickets }</small>
        <br />
        <hr />
        { this.renderTickets() }
      </>
    )
  }
}

export default Lottery;
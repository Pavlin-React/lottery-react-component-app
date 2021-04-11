import { Component } from 'react'
import LotteryTicket from './LotteryTicket'
import { Button, Typography, Divider } from 'antd';

let { Title } = Typography

class Lottery extends Component {
  renderButton() {
    let { remainingTickets, actions } = this.props
    if ( remainingTickets > 0 ) {
      return <Button
      type='primary'
      onClick={ actions.registerTicket }
      >Buy Ticket</Button>
    }

    return <Button 
    type='primary'
      
     onClick={ actions.finish }>Check to win</Button>
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
        <Title>Lottery</Title>
        { this.renderButton() }
        <br />
        <small>Rest: { this.props.remainingTickets }</small>
        <br />
        <Divider />
        { this.renderTickets() }
      </>
    )
  }
}

export default Lottery;
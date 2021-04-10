import { Component } from 'react'


class LotteryTicket extends Component {
  render() {
    let { actions, index, color, number } = this.props
    return(
       <div
        style={ {
          backgroundColor : color,
          padding         : 5,
          width           : '60%',
          margin          : 'auto'
         } }
       >
        <button 
        style={ { float: 'left'} }
        onClick={ () => { actions.removeTicket( index ) } }
        >
        X</button>
        <small>This ticket has: <b>{ number }</b></small>

       </div>
    )
  }
}

export default LotteryTicket;
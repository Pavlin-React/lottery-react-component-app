import './App.css';
import { Component }        from 'react'
import { getRandomNumber }  from './Helper/utils'
import { registerTicket, removeTicket }   from './Helper/actions'
import Lottery              from './Components/Lottery'

class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      winningNumber     : getRandomNumber(),
      tickets           : [],
      remainingTickets  : 5,
      finished          : false
    }

    this.registerTicket = registerTicket.bind( this )
    this.removeTicket   = removeTicket.bind( this )
  }

  renderApp() {
    let { tickets, remainingTickets } = this.state
    let actions                       = {}
    actions.registerTicket            = this.registerTicket
    actions.removeTicket              = this.removeTicket
    
    return(
      <Lottery
        actions           = { actions }
        tickets           = { tickets }
        remainingTickets  = { remainingTickets }

      />
    )
  }

  render() {
    return(
      <div className='App'>
         { this.renderApp() }
      </div>
    )
  }
}

export default App;

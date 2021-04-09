import React, { Component }        from 'react'
import './App.css';
import { getRandomNumber }  from './Helper/utils'
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
  }

  renderApp() {
    return(
      <Lottery
        remainingTickets = { this.state.remainingTickets }

      />
    )
  }

  render() {
    console.log(this.state.tickets)
    return(
      <div className='App'>
         { this.renderApp() }
      </div>
    )
  }
}

export default App;

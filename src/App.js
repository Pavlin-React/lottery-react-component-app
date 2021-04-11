import './App.css';
import 'antd/dist/antd.css'
import { Component } from 'react'
import { getRandomNumber } from './Helper/utils'
import { registerTicket, removeTicket, finish, reset } from './Helper/actions'

import Lottery from './Components/Lottery'
import AppHeader from './Components/AppHeader'
import AppFooter from './Components/Footer'
import Final from './Components/Final'
import AboutUs from './Components/AboutUs'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from 'antd'

let { Content } = Layout

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false
    }

    this.registerTicket = registerTicket.bind(this)
    this.removeTicket = removeTicket.bind(this)
    this.finish = finish.bind(this)
    this.reset = reset.bind(this)
  }

  renderApp() {
    let { tickets, remainingTickets, finished, winningNumber } = this.state
    let actions = {}
    if (finished) {
      actions.reset = this.reset
      return (
        <Final
          actions={actions}
          tickets={tickets}
          winningNumber={winningNumber}
        />
      )
    }

    actions.registerTicket = this.registerTicket
    actions.removeTicket = this.removeTicket
    actions.finish = this.finish
    actions.reset = this.reset

    return (
      <Lottery
        actions={actions}
        tickets={tickets}
        remainingTickets={remainingTickets}

      />
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Layout className='layout'>
          <AppHeader />
          <Content style={{ padding: '0 50px', textAlign: 'center' }}>
            <div className="site-layout-content">
              <Switch>
                <Route path= '/' exact component={ () => this.renderApp() } />
                <Route path= '/about' component={ AboutUs } />
              </Switch>
              
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;

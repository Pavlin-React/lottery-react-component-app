import { Component } from 'react'
import { Button, Card, Typography } from 'antd';

let { Title } = Typography

class LotteryTicket extends Component {
  render() {
    let { actions, index, color, number } = this.props
    return (
      <Card
        style={{
          backgroundColor: color,
          
          margin: 'auto'
        }}
      >
        
        This ticket has: <b><Title>{number}</Title></b>
        <Button
          block
          onClick={() => { actions.removeTicket(index) }}
        >
          X
        </Button>

      </Card>
    )
  }
}

export default LotteryTicket;
import { Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Pavlin-JS</Footer>
    )
  }
}

export default AppFooter
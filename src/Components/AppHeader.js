import { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

class AppHeader extends Component {
    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]}>
                    <Menu.Item key="/"><Link to='/'>Starts</Link></Menu.Item>
                    <Menu.Item key="/about"><Link to='/about'>About us</Link></Menu.Item>               
                </Menu>
            </Header>
        )
    }
}

export default AppHeader
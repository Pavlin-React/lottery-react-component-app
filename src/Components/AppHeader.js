import { Component } from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

class AppHeader extends Component {
    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="/">Starts</Menu.Item>
                    <Menu.Item key="/about">About us</Menu.Item>               
                </Menu>
            </Header>
        )
    }
}

export default AppHeader
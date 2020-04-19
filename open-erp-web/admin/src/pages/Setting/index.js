import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

class Setting extends Component {

  handletaskEvery = () => {
    this.props.dispatch({
      type: 'takeEvery',
      user: {
        username: 'zs',
        password: '123'
      }
    })
  }
  handleLatest = () => {
    this.props.dispatch({
      type: 'takeLatest',
      user: {
        username: 'zs',
        password: '123444'
      }
    })
  }
  handleThrottle = () => {
    this.props.dispatch({
      type: 'throttle',
      user: {
        username: 'zs',
        password: '123'
      }
    })
  }
  handleTake = () => {
    this.props.dispatch({
      type: 'take'
    })
  }
  
  
  render() {
    return (
      <div>
        <Button onClick={this.handletaskEvery}>点击takeEvery</Button>
        <Button onClick={this.handleLatest}>点击takeLatest</Button>
        <Button onClick={this.handleThrottle}>点击throttle</Button>
        <Button onClick={this.handleTake}>点击take</Button>
      </div>
    )
  }
}

export default connect()(Setting)

import React, { Component } from 'react';
import { routers } from './routers';
import { Switch, Redirect } from 'react-router-dom';

import FrameOut from './components/FrameOut'

export default class App extends Component {
  componentDidMount() {}
  render () {
    return (
      <FrameOut>
        <Switch>
          {routers.map(route => {
            // TODO 做授权
            return <route.component key={route.path} exact {...route} />
          })}
          <Redirect exact from="/admin" to="/admin/dashboard"/>
          <Redirect to="/404" />
        </Switch>
      </FrameOut>
    )
  }
}


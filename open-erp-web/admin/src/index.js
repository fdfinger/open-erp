import React from 'react'
import ReactDOM from 'react-dom'
import './asset/css/index.less'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store'
// antd 中文环境配置
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { commonRoutes } from './routers'
import App from './App'
import Loading from './components/Loading'

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <Switch>
            {commonRoutes.map((route) => (
              <Route key={route.path} exact {...route} />
            ))}
            <Route
              path="/admin"
              render={(routeProps) => {
                // 授权操作
                return <App {...routeProps} />
              }}
            />
            <Redirect exact from="/" to="/admin" />
            <Redirect exact from="" to="/admin" />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  </React.Suspense>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

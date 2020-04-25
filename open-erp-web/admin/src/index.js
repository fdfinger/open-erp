import React from 'react'
import ReactDOM from 'react-dom'
import './asset/css/index.less'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store'
// antd 中文环境配置
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

import App from './App'

ReactDOM.render(
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

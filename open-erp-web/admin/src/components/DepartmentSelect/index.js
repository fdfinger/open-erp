import React from 'react'
import { Provider } from 'react-redux'
import store from './model'
import DepartmentSelectCon from './DepartmentSelectCon'

export default function DepartmentSelect() {
  return (
    <Provider store={store}>
      <DepartmentSelectCon></DepartmentSelectCon>
    </Provider>
  )
}

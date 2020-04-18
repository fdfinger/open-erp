import { createStore } from 'redux'
import countReducer from './count/reducers'

export default function configuresStore(preloadedState) {
  return createStore(
    countReducer,
    preloadedState
  )
}
import { takeEvery, select, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from '../../api'
import { actions } from '../constant'

export function* loginSaga () {
  yield takeEvery(actions.LOGIN_SUBMIT, function* () {
    try {
      const state = yield select(state => state.login)
      const res = yield call(api.login.login, state)
      if (res.data) {
        yield put({
          type: actions.LOGIN_SUCCESS,
          value: res.data
        })
        yield put(push('/admin/dashboard'))
      } else {
        yield put({
          type: actions.LOGIN_ERROR,
          value: res.data
        })
      }
    } catch (error) {
      
    }
  })
}

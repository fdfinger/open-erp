import { call, put, takeLatest } from 'redux-saga/effects';
import { INIT_DEPARTMENT } from './actionTypes'
import { initDepartment } from './actions'
import { getList } from '../../../api/department';

function* fetchDepartment(action) {
  try {
    const department = yield call(getList, action.payload)
    yield put(initDepartment(department))
  } catch (error) {
    
  }
}

function* mySaga() {
  yield takeLatest(INIT_DEPARTMENT, fetchDepartment);
}

export default  mySaga
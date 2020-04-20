import { takeEvery, select, call, put } from 'redux-saga/effects'
import api from '../../api'
import { AREA_SEARCH_CLICK, AREA_UPDATE_TABLE } from '../constant/area'

export default function* areaSaga () {
  // 查询 异步
  yield takeEvery(AREA_SEARCH_CLICK, function* () {
    try {
      const state = yield select(({ area }) => area)
      const res = yield call(api.area.list, state.searchForm)
      if (res.data) {
        yield put({
          type: AREA_UPDATE_TABLE,
          value: res.data && res.data.rows
        })
      } else {
        console.log(res)
      }
    } catch (error) {
      
    }
  })
}

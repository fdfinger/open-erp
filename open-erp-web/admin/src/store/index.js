import { createStore, applyMiddleware, combineReducers } from "redux";
import createSageMiddleware from "redux-saga";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createHashHistory } from  'history';
import { allSaga } from "./sagas";
import { defReducer } from "./reducers/defReducer";
import { userReducer } from "./reducers/userReducer";
import { areaReducer } from './reducers/areaReducer'
import { loginReducer } from './reducers/loginReducer'
import { processCataReducer } from './reducers/processCataReducer'

const sageMiddlerware = createSageMiddleware();

const middleware = routerMiddleware(createHashHistory())

const store = createStore(
  combineReducers({
    def: defReducer,
    login: loginReducer,
    user: userReducer,
    area: areaReducer,
    processCata: processCataReducer,
    routing: routerReducer
  }),
  {},
  applyMiddleware(sageMiddlerware, middleware)
);

sageMiddlerware.run(allSaga);

export default store;

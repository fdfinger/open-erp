import { createStore, applyMiddleware, combineReducers } from "redux";
import createSageMiddleware from "redux-saga";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createHashHistory } from  'history';
import { defReducer } from "./reducers/defReducer";

import { allSaga } from "./sagas";
import { userReducer } from "./reducers/userReducer";

const sageMiddlerware = createSageMiddleware();

const middleware = routerMiddleware(createHashHistory())

const store = createStore(
  combineReducers({
    def: defReducer,
    login: userReducer,
    routing: routerReducer
  }),
  {},
  applyMiddleware(sageMiddlerware, middleware)
);

sageMiddlerware.run(allSaga);

export default store;

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga, { helloSaga } from "./sagas";
import reducer from "./reducers";
import { all } from "redux-saga/effects";
import { HelpersAction } from "./helpers";
import { Logger } from "./logger";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);
sagaMiddleware.run(function* () {
  yield all([HelpersAction.watchFetchData(), Logger.watch()]);
});

export const action = (type) => ({ type });

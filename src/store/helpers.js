import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { UserApi } from "../api/UserApi";

export class HelpersAction {
  static *fetchData(action) {
    try {
      const data = yield call(UserApi.fetchUser, "mytest");
      console.log("=--->", data);
      yield put({ type: "FETCH_SUCCEEDED", data });
    } catch (err) {
      yield put({ type: "FETCH_FAILED", err });
    }
  }

  static *createUser(action) {
    try {
        yield put({ type: "CREATE_SUCCEEDED" });
      } catch (err) {
        yield put({ type: "CREATE_FAILED", err });
      }
  }

  static *watchFetchData() {
    // yield takeLatest("FETCH_REQUESTED", HelpersAction.fetchData);
    yield takeEvery("FETCH_REQUESTED", HelpersAction.fetchData);
    yield takeEvery("CREATE_USER", HelpersAction.createUser);
  }
}

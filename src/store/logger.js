import { select, take, takeEvery } from "redux-saga/effects";
import { action } from "./store";

export class Logger {
  static *logger() {
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  }

  static *loggerTwo() {
    let n = 0;
    while (true) {
      const action = yield take("*");
      const state = yield select();
      console.log("action 2", action);
      console.log("state after 2", state);

      n += 1;
      if (n === 3) {
        console.log('STOP')
        break;
      }
    }
  }
  static *watch() {
    // yield takeEvery("*", Logger.logger);
    yield Logger.loggerTwo();
  }
}

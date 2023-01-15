import { all } from "redux-saga/effects";
import { todoListsSaga } from "./TodoListsList/saga";

export function* homePageSaga() {
  yield all([todoListsSaga()]);
}

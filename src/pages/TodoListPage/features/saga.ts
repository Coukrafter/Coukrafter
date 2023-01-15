import { all } from "redux-saga/effects";
import { todoListSaga } from "./TodoList/saga";

export function* todoListPageSaga() {
  yield all([todoListSaga()]);
}

import { all } from "redux-saga/effects";
import { listOfTodoListsSaga } from "./ListOfTodoLists/saga";

export function* homePageSaga() {
  yield all([listOfTodoListsSaga]);
}

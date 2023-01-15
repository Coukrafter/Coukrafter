import { all } from "redux-saga/effects";
import { homePageSaga } from "./pages/HomePage/features/saga";
import { todoListPageSaga } from "./pages/TodoListPage/features/saga";

export function* rootSaga() {
  yield all([homePageSaga(), todoListPageSaga()]);
}

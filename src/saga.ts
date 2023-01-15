import { all } from "redux-saga/effects";
import { homePageSaga } from "./pages/HomePage/features/saga";

export function* rootSaga() {
  yield all([homePageSaga()]);
}

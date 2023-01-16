import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { api } from "src/api";
import { TodoList } from "src/types";
import { todoListsFetchFailure, todoListsFetchSuccess } from "./actions";

type TodoListsFetchResponse = TodoList[];

const todoListsFetchApi = () =>
  api
    .get<TodoListsFetchResponse>("/lists")
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

function* todoListFetchSaga() {
  try {
    const { data: todoLists }: AxiosResponse<TodoListsFetchResponse> =
      yield call(todoListsFetchApi);

    yield put(todoListsFetchSuccess(todoLists));
  } catch (e) {
    yield put(todoListsFetchFailure());
  }
}

function* todoListRequestFetchSaga() {
  yield takeLatest("HOME_PAGE.TODO_LISTS.FETCH", todoListFetchSaga);
}

export function* todoListsSaga() {
  yield all([todoListRequestFetchSaga()]);
}

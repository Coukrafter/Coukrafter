import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { api } from "src/api";
import { TodoList } from "src/types";
import {
  todoListFetchFailure,
  todoListFetchSuccess,
  TodoListFetchAction,
} from "./actions";

type TodoListFetchResponse = TodoList;

const todoListFetchApi = (listId: number) =>
  api
    .get<TodoListFetchResponse>(`/lists/${listId}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

function* todoListFetchSaga({ payload: { listId } }: TodoListFetchAction) {
  try {
    const { data: todoList }: AxiosResponse<TodoListFetchResponse> = yield call(
      () => todoListFetchApi(listId)
    );

    yield put(todoListFetchSuccess(todoList));
  } catch (e) {
    yield put(todoListFetchFailure());
  }
}

function* todoListRequestFetchSaga() {
  yield takeLatest("TODO_LIST_PAGE.TODO_LIST.FETCH", todoListFetchSaga);
}

export function* todoListSaga() {
  yield all([todoListRequestFetchSaga()]);
}

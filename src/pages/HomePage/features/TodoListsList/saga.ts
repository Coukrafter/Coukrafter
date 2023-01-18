import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { api } from "src/api";
import {
  TodoListsCreateNewListResponse,
  TodoListsFetchResponse,
} from "src/types";

import {
  todoListsFetchFailure,
  todoListsFetchSuccess,
  TodoListsSubmitNewListAction,
  todoListsSubmitNewListFailure,
  todoListsSubmitNewListSuccess,
} from "./actions";

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

const todoListsCreateNewListApi = (title: string) =>
  api
    .post<TodoListsCreateNewListResponse>("/lists", { title })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

function* todoListsCreateNewListSaga({
  payload: { listTitle },
}: TodoListsSubmitNewListAction) {
  try {
    const { data: todoList }: AxiosResponse<TodoListsCreateNewListResponse> =
      yield call(() => todoListsCreateNewListApi(listTitle));

    yield put(todoListsSubmitNewListSuccess(todoList));
  } catch (e) {
    yield put(todoListsSubmitNewListFailure());
  }
}

function* todoListsRequestCreateNewListSaga() {
  yield takeLatest(
    "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST",
    todoListsCreateNewListSaga
  );
}

export function* todoListsSaga() {
  yield all([todoListRequestFetchSaga(), todoListsRequestCreateNewListSaga()]);
}

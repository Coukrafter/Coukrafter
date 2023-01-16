import { AxiosResponse } from "axios";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { api } from "src/api";
import { NewTodoItem, TodoItem, TodoList } from "src/types";
import {
  todoListFetchFailure,
  todoListFetchSuccess,
  TodoListFetchAction,
  TodoListSubmitNewItemAction,
  todoListSubmitNewItemSuccess,
  todoListSubmitNewItemFailure,
} from "./actions";
import { getTodoListId, getTodoListItems } from "./selectors";

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

const todoListSubmitNewItemApi = (
  listId: number,
  items: (NewTodoItem | TodoItem)[]
) =>
  api
    .put<TodoListFetchResponse>(`/lists/${listId}`, { items })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

function* todoListSubmitNewItemSaga({
  payload: { todoItem },
}: TodoListSubmitNewItemAction) {
  try {
    const listId: number = yield select(getTodoListId);
    const existingItems: TodoItem[] = yield select(getTodoListItems);

    const { data }: AxiosResponse<TodoListFetchResponse> = yield call(() =>
      todoListSubmitNewItemApi(listId, [...existingItems, todoItem])
    );

    yield put(todoListSubmitNewItemSuccess(data.items));
  } catch (e) {
    yield put(todoListSubmitNewItemFailure());
  }
}

function* todoListSubmitNewItemRequestSaga() {
  yield takeLatest(
    "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM",
    todoListSubmitNewItemSaga
  );
}

export function* todoListSaga() {
  yield all([todoListRequestFetchSaga(), todoListSubmitNewItemRequestSaga()]);
}

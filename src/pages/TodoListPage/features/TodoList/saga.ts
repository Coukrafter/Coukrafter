import { AxiosResponse } from "axios";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { api } from "src/api";
import { NewTodoItem, TodoItem, TodoList } from "src/types";
import { getNewId } from "src/utils/utils";
import {
  todoListFetchFailure,
  todoListFetchSuccess,
  TodoListFetchAction,
  TodoListSubmitNewItemAction,
  todoListSubmitNewItemSuccess,
  todoListSubmitNewItemFailure,
  TodoListDeleteItemAction,
  todoListDeleteItemSuccess,
  todoListDeleteItemFailure,
  TodoListEditItemAction,
  todoListEditItemSuccess,
  todoListEditItemFailure,
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

const todoListSubmitNewItemApi = (listId: number, items: TodoItem[]) =>
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

    const newTodoItemWithId = { ...todoItem, id: getNewId(), isChecked: false };

    const { data }: AxiosResponse<TodoListFetchResponse> = yield call(() =>
      todoListSubmitNewItemApi(listId, [...existingItems, newTodoItemWithId])
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

const todoListDeleteItemApi = (listId: number, items: TodoItem[]) =>
  api
    // this would be delete rest method, but because of limitations of mock BE, this is workaround
    .put<TodoListFetchResponse>(`/lists/${listId}`, { items })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

function* todoListDeleteItemSaga({
  payload: { id: deletedItemId },
}: TodoListDeleteItemAction) {
  try {
    const listId: number = yield select(getTodoListId);
    const existingItems: TodoItem[] = yield select(getTodoListItems);

    const itemsWithoutDeletedItem = existingItems.filter(
      ({ id }) => id !== deletedItemId
    );

    const { data }: AxiosResponse<TodoListFetchResponse> = yield call(() =>
      todoListDeleteItemApi(listId, itemsWithoutDeletedItem)
    );

    yield put(todoListDeleteItemSuccess(data.items));
  } catch (e) {
    yield put(todoListDeleteItemFailure());
  }
}

function* todoListDeleteRequestSaga() {
  yield takeLatest(
    "TODO_LIST_PAGE.TODO_LIST.DELETE_ITEM",
    todoListDeleteItemSaga
  );
}

const todoListEditItemApi = (listId: number, items: TodoItem[]) =>
  api
    // this would be delete rest method, but because of limitations of mock BE, this is workaround
    .put<TodoListFetchResponse>(`/lists/${listId}`, { items })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

function* todoListEditItemSaga({
  payload: { todoItem },
}: TodoListEditItemAction) {
  try {
    const listId: number = yield select(getTodoListId);
    const existingItems: TodoItem[] = yield select(getTodoListItems);

    const editedItems = existingItems.map((item) =>
      todoItem.id === item.id ? todoItem : item
    );

    const { data }: AxiosResponse<TodoListFetchResponse> = yield call(() =>
      todoListEditItemApi(listId, editedItems)
    );

    yield put(todoListEditItemSuccess(data.items));
  } catch (e) {
    yield put(todoListEditItemFailure());
  }
}

function* todoListEditRequestSaga() {
  yield takeLatest("TODO_LIST_PAGE.TODO_LIST.EDIT_ITEM", todoListEditItemSaga);
}

export function* todoListSaga() {
  yield all([
    todoListRequestFetchSaga(),
    todoListSubmitNewItemRequestSaga(),
    todoListDeleteRequestSaga(),
    todoListEditRequestSaga(),
  ]);
}

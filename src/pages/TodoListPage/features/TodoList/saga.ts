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
} from "./actions";
import { getTodoListId, getTodoListItems } from "./selectors";

type ResponseTodoItem = Omit<TodoItem, "deadline"> & { deadline: string };

type TodoListFetchResponse = Omit<TodoList, "items"> & {
  items: ResponseTodoItem[];
};

const mapTodoItemResponseToTodoItem = (
  todoItem: ResponseTodoItem
): TodoItem => ({ ...todoItem, deadline: new Date(todoItem.deadline) });

const mapTodoListResponseToTodoList = (todoList: TodoListFetchResponse) => ({
  ...todoList,
  items: todoList.items.map(mapTodoItemResponseToTodoItem),
});

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

    const mappedTodoList = mapTodoListResponseToTodoList(todoList);

    yield put(todoListFetchSuccess(mappedTodoList));
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

    const newTodoItemWithId = { ...todoItem, id: getNewId() };

    const { data }: AxiosResponse<TodoListFetchResponse> = yield call(() =>
      todoListSubmitNewItemApi(listId, [...existingItems, newTodoItemWithId])
    );

    const mappedTodoItems = data.items.map(mapTodoItemResponseToTodoItem);

    yield put(todoListSubmitNewItemSuccess(mappedTodoItems));
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

    const mappedTodoItems = data.items.map(mapTodoItemResponseToTodoItem);

    yield put(todoListDeleteItemSuccess(mappedTodoItems));
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

export function* todoListSaga() {
  yield all([
    todoListRequestFetchSaga(),
    todoListSubmitNewItemRequestSaga(),
    todoListDeleteRequestSaga(),
  ]);
}

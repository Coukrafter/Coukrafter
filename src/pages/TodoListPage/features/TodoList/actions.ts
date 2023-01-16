import { NewTodoItem, TodoItem, TodoList } from "src/types";

export type TodoListActions =
  | TodoListFetchAction
  | TodoListFetchSuccessAction
  | TodoListFetchFailureAction
  | TodoListSubmitNewItemAction
  | TodoListSubmitNewItemSuccessAction
  | TodoListSubmitNewItemFailureAction;

export type TodoListFetchAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH";
  payload: { listId: number };
};

type TodoListFetchSuccessAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.SUCCESS";
  payload: { todoList: TodoList };
};

type TodoListFetchFailureAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.FAILURE";
};

export type TodoListSubmitNewItemAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM";
  payload: { todoItem: NewTodoItem };
};

type TodoListSubmitNewItemSuccessAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM.SUCCESS";
  payload: { todoItems: TodoItem[] };
};

type TodoListSubmitNewItemFailureAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM.FAILURE";
};

export const todoListFetch = (listId: number): TodoListFetchAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH",
  payload: { listId },
});

export const todoListFetchSuccess = (
  todoList: TodoList
): TodoListFetchSuccessAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.SUCCESS",
  payload: { todoList },
});

export const todoListFetchFailure = (): TodoListFetchFailureAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.FAILURE",
});

export const todoListSubmitNewItem = (
  todoItem: NewTodoItem
): TodoListSubmitNewItemAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM",
  payload: { todoItem },
});

export const todoListSubmitNewItemSuccess = (
  todoItems: TodoItem[]
): TodoListSubmitNewItemSuccessAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM.SUCCESS",
  payload: { todoItems },
});

export const todoListSubmitNewItemFailure =
  (): TodoListSubmitNewItemFailureAction => ({
    type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM.FAILURE",
  });

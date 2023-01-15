import { TodoListItem } from "src/types";

export type TodoListActions =
  | TodoListFetchAction
  | TodoListFetchSuccessAction
  | TodoListFetchFailureAction;

export type TodoListFetchAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH";
  payload: { listId: number };
};

type TodoListFetchSuccessAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.SUCCESS";
  payload: { todoList: TodoListItem };
};

type TodoListFetchFailureAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.FAILURE";
};

export const todoListFetch = (listId: number): TodoListFetchAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH",
  payload: { listId },
});

export const todoListFetchSuccess = (
  todoList: TodoListItem
): TodoListFetchSuccessAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.SUCCESS",
  payload: { todoList },
});

export const todoListFetchFailure = (): TodoListFetchFailureAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.FETCH.FAILURE",
});

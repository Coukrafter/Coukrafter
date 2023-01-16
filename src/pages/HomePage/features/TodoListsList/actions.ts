import { TodoList } from "src/types";

export type TodoListsActions =
  | TodoListsFetchAction
  | TodoListsFetchSuccessAction
  | TodoListsFetchFailureAction;

type TodoListsFetchAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH";
};

type TodoListsFetchSuccessAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH.SUCCESS";
  payload: { todoLists: TodoList[] };
};

type TodoListsFetchFailureAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH.FAILURE";
};

export const todoListsFetch = (): TodoListsFetchAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH",
});

export const todoListsFetchSuccess = (
  todoLists: TodoList[]
): TodoListsFetchSuccessAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH.SUCCESS",
  payload: { todoLists },
});

export const todoListsFetchFailure = (): TodoListsFetchFailureAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH.FAILURE",
});

import { TodoListItem } from "src/types";

export type TodoListsActions =
  | TodoListsFetchAction
  | TodoListsFetchSuccessAction
  | TodoListsFetchFailureAction;

type TodoListsFetchAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH";
};

type TodoListsFetchSuccessAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH.SUCCESS";
  payload: { todoLists: TodoListItem[] };
};

type TodoListsFetchFailureAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH.FAILURE";
};

export const todoListsFetch = (): TodoListsFetchAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH",
});

export const todoListsFetchSuccess = (
  todoLists: TodoListItem[]
): TodoListsFetchSuccessAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH.SUCCESS",
  payload: { todoLists },
});

export const todoListsFetchFailure = (): TodoListsFetchFailureAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH.FAILURE",
});

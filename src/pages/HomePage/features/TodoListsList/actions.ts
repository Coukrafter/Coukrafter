export type TodoListsActions =
  | TodoListsFetchAction
  | TodoListsFetchSuccessAction
  | TodoListsFetchFailureAction;

type TodoListsFetchAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH";
};

type TodoListsFetchSuccessAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH.SUCCESS";
};

type TodoListsFetchFailureAction = {
  type: "HOME_PAGE.TODO_LISTS.FETCH.FAILURE";
};

export const todoListsFetch = (): TodoListsFetchAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH",
});

export const todoListsFetchSuccess = (): TodoListsFetchSuccessAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH.SUCCESS",
});

export const todoListsFetchFailure = (): TodoListsFetchFailureAction => ({
  type: "HOME_PAGE.TODO_LISTS.FETCH.FAILURE",
});

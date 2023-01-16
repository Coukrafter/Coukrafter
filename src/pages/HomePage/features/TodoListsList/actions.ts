import { TodoList } from "src/types";

export type TodoListsActions =
  | TodoListsFetchAction
  | TodoListsFetchSuccessAction
  | TodoListsFetchFailureAction
  | TodoListsSubmitNewListAction
  | TodoListsSubmitNewListSuccessAction
  | TodoListsSubmitNewListFailureAction;

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

export type TodoListsSubmitNewListAction = {
  type: "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST";
  payload: { listTitle: string };
};

type TodoListsSubmitNewListSuccessAction = {
  type: "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST.SUCCESS";
  payload: { todoList: TodoList };
};

type TodoListsSubmitNewListFailureAction = {
  type: "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST.FAILURE";
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

export const todoListsSubmitNewList = (
  listTitle: string
): TodoListsSubmitNewListAction => ({
  type: "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST",
  payload: { listTitle },
});

export const todoListsSubmitNewListSuccess = (
  todoList: TodoList
): TodoListsSubmitNewListSuccessAction => ({
  type: "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST.SUCCESS",
  payload: { todoList },
});

export const todoListsSubmitNewListFailure =
  (): TodoListsSubmitNewListFailureAction => ({
    type: "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST.FAILURE",
  });

import { NewTodoItem, TodoList } from "src/types";

export type TodoListActions =
  | TodoListFetchAction
  | TodoListFetchSuccessAction
  | TodoListFetchFailureAction
  | TodoListSubmitNewTaskAction
  | TodoListSubmitNewTaskSuccessAction
  | TodoListSubmitNewTaskFailureAction;

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

type TodoListSubmitNewTaskAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_TASK";
  payload: { todoItem: NewTodoItem };
};

type TodoListSubmitNewTaskSuccessAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_TASK.SUCCESS";
};

type TodoListSubmitNewTaskFailureAction = {
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_TASK.FAILURE";
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

export const todoListSubmitNewTask = (
  todoItem: NewTodoItem
): TodoListSubmitNewTaskAction => ({
  type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_TASK",
  payload: { todoItem },
});

export const todoListSubmitNewTaskSuccess =
  (): TodoListSubmitNewTaskSuccessAction => ({
    type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_TASK.SUCCESS",
  });

export const todoListSubmitNewTaskFailure =
  (): TodoListSubmitNewTaskFailureAction => ({
    type: "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_TASK.FAILURE",
  });

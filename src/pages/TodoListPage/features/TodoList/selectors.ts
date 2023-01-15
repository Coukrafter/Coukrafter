import { StoreState } from "src/reducer";

const pathToState = (state: StoreState) => state.todoListPage.todoList;

export const getTodoListItems = (state: StoreState) =>
  pathToState(state).todoList?.items;

export const getTodoListTitle = (state: StoreState) =>
  pathToState(state).todoList?.title;

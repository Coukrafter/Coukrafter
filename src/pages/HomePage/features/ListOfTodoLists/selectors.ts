import { StoreState } from "src/reducer";

const pathToState = (state: StoreState) => state.homePage.listOfTodoLists;

export const getListOfTodoLists = (state: StoreState) =>
  pathToState(state).listOfTodoLists;

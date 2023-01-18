import { StoreState } from "src/reducer";

const pathToState = (state: StoreState) => state.todoListPage.filter;

export const getSearchedValue = (state: StoreState) =>
  pathToState(state).searchedValue;

export const getSelectedProgress = (state: StoreState) =>
  pathToState(state).selectedProgress;

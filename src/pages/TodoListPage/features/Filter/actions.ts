import { SelectedProgress } from "../../components/Sidebar/ProgressSlider";

export type FilterActions =
  | FilterChangeSearchedValueAction
  | FilterChangeSelectedProgressAction;

type FilterChangeSearchedValueAction = {
  type: "TODO_LIST_PAGE.FILTER.SEARCHED_VALUE_CHANGE";
  payload: { searchedValue: string };
};

type FilterChangeSelectedProgressAction = {
  type: "TODO_LIST_PAGE.FILTER.SELECTED_PROGRESS_CHANGE";
  payload: { selectedValue: SelectedProgress };
};

export const filterChagngeSearchedValue = (
  searchedValue: string
): FilterChangeSearchedValueAction => ({
  type: "TODO_LIST_PAGE.FILTER.SEARCHED_VALUE_CHANGE",
  payload: { searchedValue },
});

export const filterSelectedProgressChange = (
  selectedValue: SelectedProgress
): FilterChangeSelectedProgressAction => ({
  type: "TODO_LIST_PAGE.FILTER.SELECTED_PROGRESS_CHANGE",
  payload: { selectedValue },
});

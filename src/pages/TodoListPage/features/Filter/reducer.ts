import { SelectedProgress } from "../../components/Sidebar/ProgressSlider";

import { FilterActions } from "./actions";

export type FilterState = {
  searchedValue: string;
  selectedProgress: SelectedProgress;
};

const initialState: FilterState = {
  searchedValue: "",
  selectedProgress: "all",
};

export function filterReducer(
  state: FilterState = initialState,
  action: FilterActions
) {
  switch (action.type) {
    case "TODO_LIST_PAGE.FILTER.SEARCHED_VALUE_CHANGE": {
      const { searchedValue } = action.payload;
      return {
        ...state,
        searchedValue,
      };
    }

    case "TODO_LIST_PAGE.FILTER.SELECTED_PROGRESS_CHANGE": {
      const { selectedValue } = action.payload;
      return {
        ...state,
        selectedProgress: selectedValue,
      };
    }

    default:
      return state;
  }
}

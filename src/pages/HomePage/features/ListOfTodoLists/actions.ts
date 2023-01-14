export type ListOfTodoListsActions = ListOfTodoListsFetchAction;

type ListOfTodoListsFetchAction = {
  type: "HOME_PAGE.LIST_OF_TODO_LISTS.FETCH";
};

export const listOfTodoListsFetch = (): ListOfTodoListsFetchAction => ({
  type: "HOME_PAGE.LIST_OF_TODO_LISTS.FETCH",
});

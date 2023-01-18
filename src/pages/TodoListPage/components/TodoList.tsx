import { compose, curry, equals, filter } from "ramda";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddNewItemCard, TaskItem, ListOfItems } from "src/components";
import { TodoItem } from "src/types/generalTypes";
import {
  getSearchedValue,
  getSelectedProgress,
} from "../features/Filter/selectors";

import {
  todoListDeleteItem,
  todoListEditItem,
} from "../features/TodoList/actions";
import { getTodoListItems } from "../features/TodoList/selectors";
import { TodoItemFormMode } from "../types";
import { SelectedProgress } from "./Sidebar/ProgressSlider";
import TodoItemModalForm from "./TodoItemModalForm";

const filterByName = curry((searchedValue: string, { name }: TodoItem) =>
  name.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase())
);

const filterByProgress = curry(
  (selectedProgress: SelectedProgress, { isChecked }: TodoItem) => {
    if (selectedProgress === "all") {
      return true;
    }
    return selectedProgress === "finished" ? isChecked : !isChecked;
  }
);

export default function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormMode, setModalFormMode] =
    useState<TodoItemFormMode>("creating");
  const [todoItemFormDefaultValues, setTodoItemFormDefaultValues] =
    useState<TodoItem>();

  const dispatch = useDispatch();
  const todoListItems = useSelector(getTodoListItems, equals);
  const searchedValue = useSelector(getSearchedValue);
  const selectedProgress = useSelector(getSelectedProgress);

  const filteredItems =
    todoListItems &&
    (compose(
      filter(filterByName(searchedValue)),
      filter(filterByProgress(selectedProgress))
    )(todoListItems) as TodoItem[]);

  const handleAddNewItemClick = () => {
    setIsModalOpen(true);
    setModalFormMode("creating");
    setTodoItemFormDefaultValues(undefined);
  };

  const handleDeleteItem = (id: number) => {
    dispatch(todoListDeleteItem(id));
  };

  const handleEditItem = (id: number) => {
    setIsModalOpen(true);
    setModalFormMode("editing");
    setTodoItemFormDefaultValues(filteredItems?.find((item) => id === item.id));
  };

  const handleToogleCheckItem = (id: number, isChecked: boolean) => {
    const itemToToggle = filteredItems?.find((item) => id === item.id);
    itemToToggle && dispatch(todoListEditItem({ ...itemToToggle, isChecked }));
  };

  return (
    <div>
      <ListOfItems>
        {filteredItems?.map((todoItem) => (
          <TaskItem
            key={`todoListItem-${todoItem.id}`}
            todoItem={todoItem}
            handleDelete={handleDeleteItem}
            handleEdit={handleEditItem}
            handleToogleCheckItem={handleToogleCheckItem}
          />
        ))}
        <AddNewItemCard onClick={handleAddNewItemClick} />
      </ListOfItems>
      <TodoItemModalForm
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        mode={modalFormMode}
        defaultValues={todoItemFormDefaultValues}
      />
    </div>
  );
}

import { equals } from "ramda";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddNewItemCard, TaskItem, ListOfItems } from "src/components";
import { TodoItem } from "src/types";

import {
  todoListDeleteItem,
  todoListEditItem,
} from "../features/TodoList/actions";
import { getTodoListItems } from "../features/TodoList/selectors";
import { TodoItemFormMode } from "../types";
import TodoItemModalForm from "./TodoItemModalForm";

export default function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormMode, setModalFormMode] =
    useState<TodoItemFormMode>("creating");
  const [todoItemFormDefaultValues, setTodoItemFormDefaultValues] =
    useState<TodoItem>();

  const dispatch = useDispatch();
  const todoListItems = useSelector(getTodoListItems, equals);

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
    setTodoItemFormDefaultValues(todoListItems?.find((item) => id === item.id));
  };

  const handleToogleCheckItem = (id: number, isChecked: boolean) => {
    const itemToToggle = todoListItems?.find((item) => id === item.id);
    itemToToggle && dispatch(todoListEditItem({ ...itemToToggle, isChecked }));
  };

  return (
    <>
      <ListOfItems>
        {todoListItems?.map((todoItem) => (
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
    </>
  );
}

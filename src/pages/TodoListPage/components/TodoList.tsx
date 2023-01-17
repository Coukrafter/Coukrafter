import { equals } from "ramda";
import { useState } from "react";
import { useSelector } from "react-redux";

import { AddNewItemCard, TaskItem, ListOfItems } from "src/components";

import { getTodoListItems } from "../features/TodoList/selectors";
import NewTodoItemModalForm from "./NewTodoItemModalForm";

export default function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todoListItems = useSelector(getTodoListItems, equals);

  const handleAddNewItemClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ListOfItems>
        {todoListItems?.map((todoItem) => (
          <TaskItem key={`todoListItem-${todoItem.id}`} todoItem={todoItem} />
        ))}
        <AddNewItemCard onClick={handleAddNewItemClick} />
      </ListOfItems>
      <NewTodoItemModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

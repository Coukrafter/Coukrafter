import { equals } from "ramda";
import { useState } from "react";
import { useSelector } from "react-redux";

import { TaskItem, ListOfItems } from "src/components";

import { getTodoListItems } from "../features/TodoList/selectors";
import AddNewItemCard from "./AddNewItemCard";
import NewTodoItemModalForm from "./NewTodoItemModalForm";

export default function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todoListItems = useSelector(getTodoListItems, equals);

  const handleAddNewItemClick = () => {
    setIsModalOpen(true);
  };

  if (!todoListItems) {
    return <>empty list</>;
  }

  return (
    <>
      <ListOfItems>
        {todoListItems.map(({ id, name, deadline, text }) => (
          <TaskItem
            key={`todoListItem-${id}`}
            deadline={deadline}
            text={text}
            title={name}
          />
        ))}
        <AddNewItemCard onClick={handleAddNewItemClick} />
      </ListOfItems>
      <NewTodoItemModalForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { equals } from "ramda";

import { ListOfItems, ListItem, AddNewItemCard } from "src/components";

import { getTodoLists } from "../features/TodoListsList/selectors";
import { todoListsFetch } from "../features/TodoListsList/actions";
import NewListModal from "./NewListModal";

export default function TodoLists() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const todoLists = useSelector(getTodoLists, equals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoListsFetch());
  }, []);

  const handleAddNewItemClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ListOfItems>
        {todoLists.map((listItem) => (
          <ListItem key={`todoLists-${listItem.id}`} item={listItem} />
        ))}
        <AddNewItemCard onClick={handleAddNewItemClick} />
      </ListOfItems>
      <NewListModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

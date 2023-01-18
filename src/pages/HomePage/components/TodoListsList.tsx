import { equals } from "ramda";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewItemCard, ListItem, ListOfItems, Loader } from "src/components";

import { todoListsFetch } from "../features/TodoListsList/actions";
import {
  getIsLoading,
  getTodoLists,
} from "../features/TodoListsList/selectors";

import NewListModal from "./NewListModal";

export default function TodoLists() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const todoLists = useSelector(getTodoLists, equals);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(todoListsFetch());
  }, []);

  const handleAddNewItemClick = () => {
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <Loader />;
  }

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

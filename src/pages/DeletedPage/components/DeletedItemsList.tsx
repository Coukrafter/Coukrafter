import { useState } from "react";
import { useQuery } from "react-query";
import { ListOfItems, Loader } from "src/components";
import DeletedItem from "src/components/ItemCard/DeletedItem";
import ItemInfoModal from "src/components/ItemInfoModal/ItemInfoModal";
import { fetchDeletedItems } from "../api/deletedItemsApi";

export default function DeletedItemsList() {
  const [isItemInfoModalOpen, setIsItemInfoModalOpen] = useState(false);
  const [currentlyOpenedItemId, setCurrentlyOpenedItemId] = useState<
    number | null
  >(null);

  const {
    isLoading,
    isError,
    isSuccess,
    data: items,
  } = useQuery("deletedItems", fetchDeletedItems);

  const handleItemClick = (id: number) => {
    setIsItemInfoModalOpen(true);
    setCurrentlyOpenedItemId(id);
  };

  const handleModalClose = () => {
    setIsItemInfoModalOpen(false);
    setCurrentlyOpenedItemId(null);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError || !isSuccess) {
    return <></>;
  }

  return (
    <>
      <ListOfItems>
        {items.map((todoItem) => (
          <DeletedItem
            key={`deletedTodoItem-${todoItem.id}`}
            todoItem={todoItem}
            onItemClick={handleItemClick}
          />
        ))}
      </ListOfItems>
      <ItemInfoModal
        isOpen={isItemInfoModalOpen}
        todoItem={items.find((item) => currentlyOpenedItemId === item.id)}
        onClose={handleModalClose}
      />
    </>
  );
}

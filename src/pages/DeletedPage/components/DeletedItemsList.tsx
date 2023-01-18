import { useQuery } from "react-query";
import { ListOfItems, TaskItem } from "src/components";
import { fetchDeletedItems } from "../api/deletedItemsApi";

export default function DeletedItemsList() {
  const { isLoading, isError, isSuccess, data } = useQuery(
    "deletedItems",
    fetchDeletedItems
  );
  if (isLoading) {
    return <></>;
  }
  if (isError || !isSuccess) {
    return <></>;
  }
  return (
    <ListOfItems>
      {data.map((todoItem) => (
        <TaskItem todoItem={todoItem} />
      ))}
    </ListOfItems>
  );
}

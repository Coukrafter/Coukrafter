import { useSelector } from "react-redux";
import { equals } from "ramda";
import { ListOfItems, ListItem } from "src/components";
import { getTodoLists } from "../features/TodoListsList/selectors";

export default function TodoLists() {
  const todoLists = useSelector(getTodoLists, equals);

  return (
    <ListOfItems>
      {todoLists.map((listItem) => (
        <ListItem key={`todoLists-${listItem.id}`} item={listItem} />
      ))}
    </ListOfItems>
  );
}

import { useSelector } from "react-redux";
import { equals } from "ramda";
import { ListOfItems, ListItem } from "src/components";
import { getListOfTodoLists } from "../features/ListOfTodoLists/selectors";

export default function ListOfTodoLists() {
  const listOfTodoLists = useSelector(getListOfTodoLists, equals);

  return (
    <ListOfItems>
      {listOfTodoLists.map((listItem) => (
        <ListItem key={`listOfTodoLists-${listItem.id}`} item={listItem} />
      ))}
    </ListOfItems>
  );
}

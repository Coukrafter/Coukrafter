import { useDispatch, useSelector } from "react-redux";
import { equals } from "ramda";
import { ListOfItems, ListItem } from "src/components";
import { getTodoLists } from "../features/TodoListsList/selectors";
import { todoListsFetch } from "../features/TodoListsList/actions";
import { useEffect } from "react";

export default function TodoLists() {
  const todoLists = useSelector(getTodoLists, equals);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(todoListsFetch()), 1000);
  }, []);

  return (
    <ListOfItems>
      {todoLists.map((listItem) => (
        <ListItem key={`todoLists-${listItem.id}`} item={listItem} />
      ))}
    </ListOfItems>
  );
}

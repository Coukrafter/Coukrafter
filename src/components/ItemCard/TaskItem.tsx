import { useDispatch } from "react-redux";

import { todoListDeleteItem } from "src/pages/TodoListPage/features/TodoList/actions";
import { TodoItem } from "src/types";
import { parseDateAndTime } from "src/utils/dateUtils";
import { ItemCard } from "../";

type Props = {
  todoItem: TodoItem;
};

export default function TaskItem({
  todoItem: { deadline, text, name, id },
}: Props) {
  const dispatch = useDispatch();

  const handleDeleteButtomClick = () => {
    dispatch(todoListDeleteItem(id));
  };

  return (
    <ItemCard title={name} onDeleteButtonClick={handleDeleteButtomClick}>
      <p>Deadline: {parseDateAndTime(deadline)}</p>
      <div>
        <p>{text}</p>
      </div>
    </ItemCard>
  );
}

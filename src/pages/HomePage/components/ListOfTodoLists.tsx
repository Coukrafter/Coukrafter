import { ListOfItems, ListItem } from "src/components";

export default function ListOfTodoLists() {
  const items = [
    {
      title: "Title TODO",
      tasks: ["Task1, Task2, Task3"],
    },
  ];

  return (
    <ListOfItems>
      {items.map(({ title, tasks }) => (
        <ListItem title={title} tasks={tasks} />
      ))}
    </ListOfItems>
  );
}

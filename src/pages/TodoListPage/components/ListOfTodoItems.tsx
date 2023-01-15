import { TaskItem, ListOfItems } from "src/components";

export default function TodoItems() {
  const items = [
    {
      title: "Title TODO",
      deadline: new Date(),
      text: "lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla",
    },
  ];

  return (
    <ListOfItems>
      {items.map(({ deadline, text, title }) => (
        <TaskItem deadline={deadline} text={text} title={title} />
      ))}
    </ListOfItems>
  );
}

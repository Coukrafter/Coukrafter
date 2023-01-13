import { useParams } from "react-router-dom";
import { TaskItem, ListOfItems } from "src/components";

export default function TodoListPage() {
  const { listId } = useParams();

  const mockItems = [
    {
      title: "Title TODO",
      deadline: new Date(),
      text: "lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla",
    },
    {
      title: "Title TODO 2",
      deadline: new Date(),
      text: "lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla",
    },
    {
      title: "Title TODO 3",
      deadline: new Date(),
      text: "lorem ipsum bla bla lorem ipsum bla bla lorem ipsum bla bla",
    },
  ];

  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>
      <div>Search bar</div>
      <ListOfItems>
        {mockItems.map(({ deadline, text, title }) => (
          <TaskItem deadline={deadline} text={text} title={title} />
        ))}
      </ListOfItems>
    </div>
  );
}

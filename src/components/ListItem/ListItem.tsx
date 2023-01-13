type Props = {
  title: string;
  tasks: string[];
};

export default function ListItem({ title, tasks }: Props) {
  return (
    <li>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {tasks.map((taskName) => (
          <p>{taskName}</p>
        ))}
      </div>
    </li>
  );
}

type Props = {
  title: string;
  deadline: Date;
  text: string;
};

export default function TaskItem({ deadline, text, title }: Props) {
  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>Deadline: {deadline.toLocaleString()}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </li>
  );
}

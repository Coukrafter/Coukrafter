import { Card } from "../common";

type Props = {
  title: string;
  deadline: Date;
  text: string;
};

export default function TaskItem({ deadline, text, title }: Props) {
  return (
    <Card title={title}>
      <p>Deadline: {deadline.toLocaleString()}</p>
      <div>
        <p>{text}</p>
      </div>
    </Card>
  );
}

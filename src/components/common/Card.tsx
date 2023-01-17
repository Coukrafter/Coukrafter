import { ReactNode } from "react";

type Props = {
  title?: string;
  onClick?: () => void;
  children: ReactNode;
  headerControls?: ReactNode;
};

export default function Card({
  title,
  children,
  onClick,
  headerControls,
}: Props) {
  return (
    <li
      className="card w-60 h-60 bg-secondary shadow-2xl hover:bg-secondary-focus transition"
      onClick={onClick}
    >
      <div className="card-body">
        <div className="flex gap-2 justify-between">
          {title && <h2 className="card-title text-2xl">{title}</h2>}
          <div className="flex gap-1 flex-col">{headerControls}</div>
        </div>
        {children}
      </div>
    </li>
  );
}

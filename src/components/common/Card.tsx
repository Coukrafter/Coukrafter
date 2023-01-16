import { ReactNode } from "react";

type Props = {
  title?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function Card({ title, children, onClick }: Props) {
  return (
    <li
      className="card w-60 h-60 bg-secondary shadow-2xl hover:bg-secondary-focus transition"
      onClick={onClick}
    >
      <div className="card-body">
        {title && <h2 className="card-title text-2xl">{title}</h2>}
        {children}
      </div>
    </li>
  );
}

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ListOfItems({ children }: Props) {
  return (
    <div className="w-4/5 m-auto">
      <ol className="grid grid-cols-4 justify-between gap-8">{children}</ol>
    </div>
  );
}

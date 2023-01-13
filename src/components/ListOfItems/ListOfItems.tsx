import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ListOfItems({ children }: Props) {
  return <ol>{children}</ol>;
}

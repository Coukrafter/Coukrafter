import { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export default function InputWrapper({ children, label }: Props) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={label}>
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
}

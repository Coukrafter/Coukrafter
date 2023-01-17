import { ReactNode } from "react";

type Props = {
  label: string;
  inputId: string;
  children: ReactNode;
};

export default function InputWrapper({ children, label, inputId }: Props) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={inputId}>
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
}

import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

type Props = {
  label: string;
  inputId: string;
  children: ReactNode;
  errorMessage?: string;
};

export default function InputWrapper({
  children,
  label,
  inputId,
  errorMessage,
}: Props) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={inputId}>
        <span className="label-text">{label}</span>
        {errorMessage && (
          <span className="label-text-alt text-error">
            <FontAwesomeIcon icon={faCircleExclamation} /> {errorMessage}
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

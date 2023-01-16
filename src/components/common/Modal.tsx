import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  modalFooter?: ReactNode;
  children?: ReactNode;
};

export default function Modal({ isOpen, modalFooter, children }: Props) {
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h2 className="font-bold text-lg">Create new Todo task</h2>
        {children}
        {modalFooter && <div className="modal-action">{modalFooter}</div>}
      </div>
    </div>
  );
}

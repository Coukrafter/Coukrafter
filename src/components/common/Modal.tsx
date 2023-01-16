import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  title?: string;
  modalFooter?: ReactNode;
  children?: ReactNode;
};

export default function Modal({ isOpen, modalFooter, children, title }: Props) {
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        {title && <h2 className="font-bold text-lg">{title}</h2>}
        {children}
        {modalFooter && <div className="modal-action">{modalFooter}</div>}
      </div>
    </div>
  );
}

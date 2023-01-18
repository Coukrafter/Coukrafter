import { ReactNode } from "react";

type Props = {
  title?: string;
  modalFooter?: ReactNode;
  children?: ReactNode;
};

export default function Modal({ modalFooter, children, title }: Props) {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        {title && <h2 className="font-bold text-lg">{title}</h2>}
        {children}
        {modalFooter && <div className="modal-action">{modalFooter}</div>}
      </div>
    </div>
  );
}

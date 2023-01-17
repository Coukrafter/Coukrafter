import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../common";

type Props = {
  title: string;
  children: ReactNode;
  onEditButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCheckboxChange?: React.ChangeEventHandler<HTMLInputElement>;
  isCheckboxChecked?: boolean;
};

export default function ItemCard({
  title,
  children,
  onCheckboxChange,
  onDeleteButtonClick,
  onEditButtonClick,
  isCheckboxChecked,
}: Props) {
  return (
    <Card
      title={title}
      headerControls={
        <>
          {onEditButtonClick && (
            <button
              className="btn btn-xs btn-square"
              type="button"
              onClick={onEditButtonClick}
            >
              <FontAwesomeIcon
                icon={faPencil}
                color="white"
                size="sm"
                className="m-auto"
              />
            </button>
          )}
          {onDeleteButtonClick && (
            <button
              className="btn btn-xs btn-square"
              type="button"
              onClick={onDeleteButtonClick}
            >
              <FontAwesomeIcon
                icon={faTrash}
                color="white"
                size="sm"
                className="m-auto"
              />
            </button>
          )}
          {onCheckboxChange && (
            <input
              type="checkbox"
              checked={isCheckboxChecked}
              className="checkbox"
              onChange={onCheckboxChange}
            />
          )}
        </>
      }
    >
      {children}
    </Card>
  );
}

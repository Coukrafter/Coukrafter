import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { Card } from "src/components";

type Props = {
  onClick: () => void;
};

export default function AddNewItemCard({ onClick }: Props) {
  return (
    <Card onClick={onClick}>
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="white"
        size="7x"
        className="m-auto"
      />
    </Card>
  );
}

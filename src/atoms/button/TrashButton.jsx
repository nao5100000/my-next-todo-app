import { IconButton } from "@chakra-ui/react";
import { FaTrashRestoreAlt } from "react-icons/fa";

const TrashButton = () => {
  return (
    <IconButton
      colorScheme="gray"
      aria-label="Search database"
      icon={<FaTrashRestoreAlt />}
      borderRadius="50%"
    />
  );
};

export default TrashButton;

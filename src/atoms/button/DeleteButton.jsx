import { CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const DeleteButton = () => {
  return (
    <IconButton
      aria-label="Search database"
      icon={<CheckIcon />}
      borderRadius="50%"
      color="green.400"
    />
  );
};

export default DeleteButton;

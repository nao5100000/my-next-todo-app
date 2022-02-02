import { IconButton } from "@chakra-ui/react";
import { BsFillPenFill } from "react-icons/bs";

const NewButton = () => {
  return (
    <IconButton
      colorScheme="orange"
      aria-label="Search database"
      icon={<BsFillPenFill />}
      borderRadius="50%"
    />
  );
};

export default NewButton;

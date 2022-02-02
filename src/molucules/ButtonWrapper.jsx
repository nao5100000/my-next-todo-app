import { HStack } from "@chakra-ui/react";
import NewButton from "../atoms/button/NewButton";
import TrashButton from "../atoms/button/TrashButton";

const ButtonWrapper = () => {
  return (
    <HStack justify="flex-end">
      <NewButton />
      <TrashButton />
    </HStack>
  );
};

export default ButtonWrapper;

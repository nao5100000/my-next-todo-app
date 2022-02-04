import { HStack } from "@chakra-ui/react";
import NewButton from "../atoms/button/NewButton";
import TrashButton from "../atoms/button/TrashButton";
import SortSelect from "../atoms/SortSelect";

const ButtonWrapper = () => {
  return (
    <HStack justify="flex-end">
      <SortSelect />
      <NewButton />
      <TrashButton />
    </HStack>
  );
};

export default ButtonWrapper;

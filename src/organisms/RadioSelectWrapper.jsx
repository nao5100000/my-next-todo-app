import { HStack } from "@chakra-ui/react";
import RadioPriority from "../molucules/input/RadioPriority";
import StatusSelect from "../molucules/input/StatusSelect";

const RadioSelectWrapper = () => {
  return (
    <HStack justify="space-between">
      <RadioPriority />
      <StatusSelect />
    </HStack>
  );
};

export default RadioSelectWrapper;

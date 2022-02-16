import { HStack } from "@chakra-ui/react";
import RadioPriority from "../molucules/input/RadioPriority";
import StatusSelect from "../molucules/input/StatusSelect";

const RadioSelectWrapper = (props) => {
  const { priority, setPriority, status, setStatus } = props;
  return (
    <HStack justify="space-between" marginBottom="30px">
      <RadioPriority priority={priority} setPriority={setPriority} />
      <StatusSelect status={status} setStatus={setStatus} />
    </HStack>
  );
};

export default RadioSelectWrapper;

import { HStack } from "@chakra-ui/react";
import RadioPriority from "../molucules/input/RadioPriority";
import StatusSelect from "../molucules/input/StatusSelect";

const RadioSelectWrapper = (props) => {
  const { priority, setPriority, status, setStatus, formError } = props;
  return (
    <HStack justify="space-between" marginBottom="30px">
      <RadioPriority
        priority={priority}
        setPriority={setPriority}
        formError={formError}
      />
      <StatusSelect
        status={status}
        setStatus={setStatus}
        formError={formError}
      />
    </HStack>
  );
};

export default RadioSelectWrapper;

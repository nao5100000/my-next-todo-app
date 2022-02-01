import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const RadioPriority = () => {
  return (
    <RadioGroup>
      <Stack direction="row" spacing={8}>
        <Radio value="low" colorScheme="cyan.400">
          Low
        </Radio>
        <Radio value="middle" colorScheme="cyan.400">
          Middle
        </Radio>
        <Radio value="high" colorScheme="cyan.400">
          High
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioPriority;

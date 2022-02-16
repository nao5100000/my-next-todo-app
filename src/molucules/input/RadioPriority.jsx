import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const RadioPriority = ({ priority, setPriority }) => {
  const radioChangeValue = (e) => {
    setPriority(e.target.value);
  };
  return (
    <>
      <Box w="47%">
        <SubTitle children="優先度" />
        <RadioGroup>
          <Stack direction="row" spacing={8}>
            <Radio
              value="low"
              colorScheme="cyan.400"
              onChange={radioChangeValue}
            >
              Low
            </Radio>
            <Radio
              value="middle"
              colorScheme="cyan.400"
              onChange={radioChangeValue}
            >
              Middle
            </Radio>
            <Radio
              value="high"
              colorScheme="cyan.400"
              onChange={radioChangeValue}
            >
              High
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
};

export default RadioPriority;

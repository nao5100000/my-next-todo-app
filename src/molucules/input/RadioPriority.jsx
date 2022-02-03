import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const RadioPriority = () => {
  return (
    <>
      <Box w="47%">
        <SubTitle children="優先度" />
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
      </Box>
    </>
  );
};

export default RadioPriority;

import { Text, Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const RadioPriority = ({ priority, setPriority, formError }) => {
  const radioChangeValue = (e) => {
    setPriority(e.target.value);
  };
  return (
    <>
      <Box w="47%">
        <SubTitle children="優先度" />
        <Text color="red">{formError.priority}</Text>
        <RadioGroup>
          <Stack direction="row" spacing={8}>
            <Radio value="low" onChange={radioChangeValue}>
              Low
            </Radio>
            <Radio value="middle" onChange={radioChangeValue}>
              Middle
            </Radio>
            <Radio value="high" onChange={radioChangeValue}>
              High
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
};

export default RadioPriority;

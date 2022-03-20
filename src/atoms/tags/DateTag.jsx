import { Box, Text } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

const DateTag = ({ todoSingle }) => {
  return (
    <Box
      display="inline-block"
      bg="gray.200"
      padding="2px 10px"
      borderRadius="3px"
    >
      <Text
        fontSize=".8rem"
        letterSpacing=".1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TimeIcon marginRight="10px" />
        10月1日
      </Text>
    </Box>
  );
};

export default DateTag;

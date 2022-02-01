import { Box, Text } from "@chakra-ui/react";

const Tag = ({ children }) => {
  return (
    <Box display="inline-block" bg="gray.400" padding="0 10px">
      <Text fontSize=".8rem" color="White" letterSpacing=".1rem">
        {children}
      </Text>
    </Box>
  );
};

export default Tag;

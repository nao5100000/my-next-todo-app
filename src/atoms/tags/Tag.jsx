import { Box, Text } from "@chakra-ui/react";

const Tag = ({ children }) => {
  return (
    <Box
      display="inline-block"
      bg="gray.200"
      padding="2px 10px"
      borderRadius="3px"
    >
      <Text fontSize=".8rem" letterSpacing=".1rem">
        {children}
      </Text>
    </Box>
  );
};

export default Tag;

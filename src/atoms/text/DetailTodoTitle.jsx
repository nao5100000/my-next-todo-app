import { Text, Box } from "@chakra-ui/react";

const DetailTodoTitle = ({ children }) => {
  return (
    <Box
      bg="gray.300"
      padding="6px 20px"
      borderRadius="3px"
      marginBottom="10px"
    >
      <Text
        color="white"
        fontSize="1.2rem"
        fontWeight="600"
        letterSpacing=".1rem"
      >
        {children}
      </Text>
    </Box>
  );
};

export default DetailTodoTitle;

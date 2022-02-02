import { Text, Box } from "@chakra-ui/react";

const TodoItem = () => {
  return (
    <Box w="30%" padding="20px" bg="red.100" minHeight="180px">
      <Text
        fontSize="1rem"
        fontWeight="600"
        marginBottom="15px"
        paddingBottom="10px"
        borderBottom="1px solid #718096"
      >
        ランディングページの作り方
      </Text>
      <Box fontSize=".8rem" maxHeight="300px" overFlow="hidden">
        テキストテキストテキスト
      </Box>
    </Box>
  );
};

export default TodoItem;

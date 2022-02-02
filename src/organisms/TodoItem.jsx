import { Text, Box } from "@chakra-ui/react";
import DeleteButton from "../atoms/button/DeleteButton";

const TodoItem = () => {
  return (
    <Box
      w="100%"
      padding="20px"
      bg="red.100"
      minHeight="180px"
      position="relative"
    >
      <Box position="absolute" right="-10px" top="-10px">
        <DeleteButton />
      </Box>
      <Text
        fontSize="1rem"
        fontWeight="600"
        marginBottom="15px"
        paddingBottom="10px"
        borderBottom="1px solid #718096"
      >
        ランディングページの作り方
      </Text>
      <Box fontSize=".8rem" maxHeight="300px" overflow="hidden">
        テキストテキストテキスト
      </Box>
    </Box>
  );
};

export default TodoItem;

import { Box, Text } from "@chakra-ui/react";

const CommentItem = () => {
  return (
    <Box
      bg="teal.50"
      w="25%"
      borderRadius="0 30px 30px 30px"
      padding="20px 20px 80px"
      boxShadow="2px 2px 1px rgba(0,0,0,.1)"
      position="relative"
      marginBottom="15px"
    >
      <Text fontSize="1.2rem" marginBottom="8px">
        name
      </Text>
      <Text fontSize=".8rem">コメントコメントコメントコメント</Text>
      <Text fontSize=".7rem" position="absolute" right="20px" bottom="20px">
        2022/01/01
      </Text>
    </Box>
  );
};

export default CommentItem;

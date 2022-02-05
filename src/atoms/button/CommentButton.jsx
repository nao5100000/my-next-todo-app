import { Button } from "@chakra-ui/react";

const CommentButton = () => {
  return (
    <Button
      bg="teal.300"
      color="white"
      borderRadius="50px"
      padding="5px"
      width="170px"
      transition="background-color .3s ease-out"
      _hover={{ background: "teal.200" }}
    >
      Comment
    </Button>
  );
};

export default CommentButton;

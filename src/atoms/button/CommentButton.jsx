import { Button } from "@chakra-ui/react";

const CommentButton = ({ onOpen }) => {
  return (
    <Button
      bg="teal.400"
      color="white"
      borderRadius="50px"
      padding="5px"
      width="170px"
      transition="background-color .3s ease-out"
      _hover={{ background: "teal.200" }}
      onClick={onOpen}
    >
      Comment
    </Button>
  );
};

export default CommentButton;

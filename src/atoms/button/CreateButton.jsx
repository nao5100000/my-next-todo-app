import { Button } from "@chakra-ui/react";

const CreateButton = ({ handleCreateTodo }) => {
  return (
    <Button
      bg="blue.400"
      color="white"
      borderRadius="50px"
      w="180px"
      display="block"
      margin="60px auto 0"
      fontSize="1.2rem"
      height="50px"
      onClick={handleCreateTodo}
      transition="background-color .3s ease-in-out"
      _hover={{ bg: "blue.200" }}
    >
      create!
    </Button>
  );
};

export default CreateButton;

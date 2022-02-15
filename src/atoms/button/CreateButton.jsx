import { Button } from "@chakra-ui/react";

const CreateButton = () => {
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
    >
      create!
    </Button>
  );
};

export default CreateButton;

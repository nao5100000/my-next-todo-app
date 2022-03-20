import { Button } from "@chakra-ui/react";

const EditButton = ({ setIsEdit, isEdit, children, handleTodoEdit }) => {
  const handleEdit = () => {
    setIsEdit(!isEdit);
    isEdit && handleTodoEdit();
  };
  return (
    <Button
      bg="white"
      color="teal.400"
      borderRadius="50px"
      padding="5px"
      width="170px"
      boxShadow="3px 3px 5px rgba(0,0,0,.1)"
      transition="background-color .3s ease-out"
      _hover={{ background: "teal.200", color: "white" }}
      marginRight="10px"
      onClick={() => handleEdit()}
    >
      {children}
    </Button>
  );
};

export default EditButton;

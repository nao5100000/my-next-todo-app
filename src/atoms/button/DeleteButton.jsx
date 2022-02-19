import { useRecoilState } from "recoil";
import { CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { todoState } from "../../hooks/TodoState";

const DeleteButton = ({ todoId }) => {
  const [todos, setTodos] = useRecoilState(todoState);

  const handleOnRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <IconButton
      aria-label="Search database"
      icon={<CheckIcon />}
      borderRadius="50%"
      color="green.400"
      onClick={() => handleOnRemove(todoId)}
    />
  );
};

export default DeleteButton;

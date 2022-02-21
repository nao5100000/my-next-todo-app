import { useRecoilState } from "recoil";
import { CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { todoState } from "../../hooks/TodoState";
import { deleteState } from "../../hooks/DeleteState";

const DeleteButton = ({ todoId }) => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [deleteTodos, setDeleteTodos] = useRecoilState(deleteState);

  const handleOnRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    const deleteTodoItem = todos.filter((todo) => todo.id === id);
    const newDeleteTodos = [...deleteTodoItem, ...deleteTodos];
    setDeleteTodos(newDeleteTodos);
    console.log(newDeleteTodos);
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

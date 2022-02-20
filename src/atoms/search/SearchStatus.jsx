import { Select } from "@chakra-ui/react";
import { todoState } from "../../hooks/TodoState";
import { useRecoilState } from "recoil";

const SearchStatus = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const searchHandleStatus = (e) => {
    const newTodos = [...todos].filter(
      (todo) => todo.status === e.target.value
    );
    console.log(todos);
    setTodos(newTodos);
  };
  return (
    <Select
      placeholder="------"
      w="25%"
      border="none"
      bg="blue.500"
      borderRadius="3px"
      fontSize=".9rem"
      boxShadow="1px 1px 3px 1px rgb(0 0 0 / 10%) inset"
      onChange={searchHandleStatus}
    >
      <option value="未着手">未着手</option>
      <option value="進行中">進行中</option>
      <option value="完了">完了</option>
    </Select>
  );
};

export default SearchStatus;

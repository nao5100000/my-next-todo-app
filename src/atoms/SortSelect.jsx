import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../hooks/TodoState";
import { Select } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";

const SortSelect = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [value, setValue] = useState("0");
  const statusSort = () => {
    const newTodos = [...todos].sort((a, b) => {
      if (a.status < b.status) {
        return -1;
      }
      if (a.status > b.status) {
        return 1;
      }
    });
    setTodos(newTodos);
  };

  const prioritySort = () => {
    const newTodos = [...todos].sort((a, b) => {
      if (a.priority < b.priority) {
        return -1;
      }
      if (a.priority > b.priority) {
        return 1;
      }
    });
    setTodos(newTodos);
  };

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === "1") {
      statusSort();
    }
    if (value === "2") {
      prioritySort();
    }
  }, [value]);

  return (
    <Select
      icon={<BiSortAlt2 />}
      w="130px"
      marginRight="30px"
      fontSize=".9rem"
      onChange={(e) => onChangeValue(e)}
    >
      <option value="0">並びかえ</option>
      <option value="1">Status順</option>
      <option value="2">進捗順</option>
    </Select>
  );
};

export default SortSelect;

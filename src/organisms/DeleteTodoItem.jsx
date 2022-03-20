import { useState } from "react";
import { useRecoilState } from "recoil";
import { Text, Box, Checkbox } from "@chakra-ui/react";
import { deleteState } from "../hooks/DeleteState";
import TagWrapper from "../molucules/TagWrapper";

const itemItem = (props) => {
  const { item } = props;

  const [deleteTodos, setDeleteTodos] = useRecoilState(deleteState);

  const handleCheckTrash = (id) => {
    const targetDeleteTodo = [...deleteTodos].find((todo) => todo.id === id);
    let newDeleteTodo = {};
    if (targetDeleteTodo.isChecked) {
      newDeleteTodo = {
        ...targetDeleteTodo,
        isChecked: false,
      };
    } else {
      newDeleteTodo = {
        ...targetDeleteTodo,
        isChecked: true,
      };
    }
    const updateDeleteTodos = [...deleteTodos];
    updateDeleteTodos.map((item, index) => {
      item.id === newDeleteTodo.id &&
        updateDeleteTodos.splice(index, 1, newDeleteTodo);
    });
    setDeleteTodos(updateDeleteTodos);
    console.log(deleteTodos);
  };
  return (
    <Box
      w="100%"
      padding="20px"
      bg="gray.200"
      minHeight="180px"
      position="relative"
      borderRadius="5px"
      boxShadow=" 2px 2px 4px rgba(0,0,0,.1)"
      cursor="pointer"
      transition="all .3s ease-in-out"
      _hover={{ boxShadow: "3px 6px 12px rgb(0 0 0 / 10%)" }}
    >
      <Checkbox
        colorScheme="green"
        position="absolute"
        top="-10px"
        left="-10px"
        onChange={() => handleCheckTrash(item.id)}
      />
      <Box>
        <Text
          fontSize="1rem"
          fontWeight="600"
          marginBottom="15px"
          paddingBottom="10px"
          borderBottom="1px solid #718096"
        >
          {item.title}
        </Text>
        <Box
          fontSize=".8rem"
          minHeight="90px"
          overflow="hidden"
          marginBottom="50px"
        >
          {item.details}
        </Box>
        {/* <TagWrapper todoPriority={todoPriority} todoStatus={todoStatus} /> */}
      </Box>
    </Box>
  );
};

export default itemItem;

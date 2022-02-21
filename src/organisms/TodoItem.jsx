import { useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import DeleteButton from "../atoms/button/DeleteButton";
import TagWrapper from "../molucules/TagWrapper";
import { useRouter } from "next/router";

const TodoItem = (props) => {
  const { todoSingle } = props;
  const [hover, setHover] = useState(false);

  // todoItemからDetailsTodoへの遷移機能
  const router = useRouter();
  const newTodoRouting = (target) => {
    router.push({
      pathname: "DetailTodo",
      query: {
        title: target.title,
        details: target.details,
      },
    });
  };
  return (
    <Box
      w="100%"
      padding="20px"
      bg="red.100"
      minHeight="180px"
      position="relative"
      borderRadius="5px"
      boxShadow=" 2px 2px 4px rgba(0,0,0,.1)"
      cursor="pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      transition="all .3s ease-in-out"
      _hover={{ boxShadow: "3px 6px 12px rgb(0 0 0 / 10%)" }}
    >
      {hover && (
        <Box position="absolute" right="-10px" top="-10px">
          <DeleteButton todoId={todoSingle.id} />
        </Box>
      )}
      <Box onClick={() => newTodoRouting(todoSingle)}>
        <Text
          fontSize="1rem"
          fontWeight="600"
          marginBottom="15px"
          paddingBottom="10px"
          borderBottom="1px solid #718096"
        >
          {todoSingle.title}
        </Text>
        <Box
          fontSize=".8rem"
          minHeight="90px"
          overflow="hidden"
          marginBottom="50px"
        >
          {todoSingle.details}
        </Box>
        <TagWrapper
          todoPriority={todoSingle.priority}
          todoStatus={todoSingle.status}
        />
      </Box>
    </Box>
  );
};

export default TodoItem;

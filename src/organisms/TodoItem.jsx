import { useState } from "react";
import { Text, Box, Tag } from "@chakra-ui/react";
import DeleteButton from "../atoms/button/DeleteButton";
import TagWrapper from "../molucules/TagWrapper";

const TodoItem = (props) => {
  const { todoTitle, todoDetails, todoPriority, todoStatus } = props;
  const [hover, setHover] = useState(false);
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
    >
      {hover && (
        <Box position="absolute" right="-10px" top="-10px">
          <DeleteButton />
        </Box>
      )}
      <Text
        fontSize="1rem"
        fontWeight="600"
        marginBottom="15px"
        paddingBottom="10px"
        borderBottom="1px solid #718096"
      >
        {todoTitle}
      </Text>
      <Box fontSize=".8rem" maxHeight="300px" overflow="hidden">
        {todoDetails}
      </Box>
      <TagWrapper todoPriority={todoPriority} todoStatus={todoStatus} />
    </Box>
  );
};

export default TodoItem;

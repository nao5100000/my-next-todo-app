import { useState } from "react";
import { commentState } from "../hooks/commentState";
import { useRecoilState } from "recoil";
import { DragHandleIcon } from "@chakra-ui/icons";
import { Box, HStack, Text, List, ListItem } from "@chakra-ui/react";
import { createDate } from "../hooks/date";

const CommentItem = ({
  comment,
  onOpen,
  setCommentEditBoolean,
  handleCommentEdit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [comments, setComments] = useRecoilState(commentState);
  const handleOnRemove = (id) => {
    const newComments = comments.filter((item) => item.id !== id);
    setComments(newComments);
  };

  // const editHandle = (id) => {
  //   const updatesComments = [...comments];
  // };

  return (
    <Box
      bg="teal.50"
      w="100%"
      borderRadius="0 30px 30px 30px"
      padding="20px 20px 80px"
      boxShadow="2px 2px 1px rgba(0,0,0,.1)"
      position="relative"
      marginBottom="15px"
    >
      <HStack justify="space-between" align="center" position="relative">
        <Text fontSize="1.2rem" marginBottom="8px">
          {comment.name}
        </Text>
        <DragHandleIcon
          fontSize=".8rem"
          marignBottom="8px"
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <List
            background="White"
            padding="5px"
            width="50px"
            border="1px solid #ccc"
            fontSize=".6rem"
            position="absolute"
            right="0"
            top="30px"
            textAlign="center"
            zIndex="10"
          >
            <ListItem
              borderBottom="1px solid #E2E8F0"
              paddingBottom="3px"
              marginBottom="3px"
              cursor="pointer"
              _hover={{ color: "blue.300" }}
              onClick={() => {
                onOpen();
                setCommentEditBoolean(true);
                handleCommentEdit(comment.id);
              }}
            >
              編集
            </ListItem>
            <ListItem
              cursor="pointer"
              _hover={{ color: "blue.300" }}
              onClick={() => handleOnRemove(comment.id)}
            >
              削除
            </ListItem>
          </List>
        )}
      </HStack>
      <Text fontSize=".8rem">{comment.text}</Text>
      <Text fontSize=".7rem" position="absolute" right="20px" bottom="20px">
        {comment.created_date}
      </Text>
    </Box>
  );
};

export default CommentItem;

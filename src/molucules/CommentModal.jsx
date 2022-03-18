import { useRecoilState, useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import SubTitle from "../atoms/text/SubTitle";
import { commentState } from "../hooks/commentState";
import { editState } from "../hooks/EditState";
import { createDate } from "../hooks/date";

const CommentModal = ({
  isOpen,
  onClose,
  detailTodoId,
  commentEditBoolean,
  setCommentEditBoolean,
}) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [formError, setFormError] = useState({});
  const [comments, setComments] = useRecoilState(commentState);
  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "名前が入力されていません";
    }
    if (!text) {
      errors.text = "コメントが入力されていません";
    }
    return errors;
  };

  const router = useRouter();
  const createComment = () => {
    if (!name || !text) {
      setFormError(validate());
    } else {
      const newComments = [
        {
          todoId: router.query.id,
          id: new Date().getTime(),
          name,
          text,
          created_date: createDate(),
        },
        ...comments,
      ];
      setComments(newComments);
      onClose();
      setName("");
      setText("");
    }
  };

  const [commentEdit, setCommentEdit] = useRecoilState(editState);
  const [editName, setEditName] = useState();
  const [editText, setEditText] = useState();

  useEffect(() => {
    setEditName(commentEdit.name);
    setEditText(commentEdit.text);
  }, [commentEdit]);

  const editComment = () => {
    const newTodo = {
      ...commentEdit,
      name: editName,
      text: editText,
    };

    const updateComments = [...comments];
    updateComments.map((item, index) => {
      item.id === commentEdit.id && updateComments.splice(index, 1, newTodo);
    });
    setComments(updateComments);
    onClose();
    setCommentEditBoolean(false);
    setCommentEdit({});
  };
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <ModalCloseButton onClick={() => setCommentEditBoolean(false)} />
        <ModalBody padding="30px">
          <Box marginBottom="30px">
            <SubTitle children="name" />
            {commentEditBoolean ? (
              <Input
                h="50px"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            ) : (
              <Input
                placeholder="山田 太郎"
                h="50px"
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <Text color="red">{formError.name}</Text>
          </Box>
          <Box>
            <SubTitle children="comment" />
            {commentEditBoolean ? (
              <Textarea
                placeholder="コメントを入れてください"
                minHeight="180px"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <Textarea
                placeholder="コメントを入れてください"
                minHeight="180px"
                onChange={(e) => setText(e.target.value)}
              />
            )}
            <Text color="red">{formError.text}</Text>
          </Box>
        </ModalBody>
        <ModalFooter padding="0 0 30px">
          {commentEditBoolean ? (
            <Button
              variant="ghost"
              maxWidth="300px"
              width="60%"
              bg="teal.400"
              color="white"
              borderRadius="50px"
              margin="0 auto"
              transition="background-color .3s ease-out"
              _hover={{ background: "teal.200" }}
              onClick={() => editComment()}
            >
              Edit
            </Button>
          ) : (
            <Button
              variant="ghost"
              maxWidth="300px"
              width="60%"
              bg="teal.400"
              color="white"
              borderRadius="50px"
              margin="0 auto"
              transition="background-color .3s ease-out"
              _hover={{ background: "teal.200" }}
              onClick={createComment}
            >
              Create
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentModal;

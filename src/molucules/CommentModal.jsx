import { useRecoilState } from "recoil";
import { useState } from "react";
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

const CommentModal = ({ isOpen, onClose }) => {
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

  const createComment = () => {
    if (!name || !text) {
      setFormError(validate());
    } else {
      const newComments = [
        {
          id: new Date().getTime(),
          name,
          text,
        },
        ...comments,
      ];
      setComments(newComments);
      onClose();
    }
  };

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <ModalCloseButton />
        <ModalBody padding="30px">
          <Box marginBottom="30px">
            <SubTitle children="name" />
            <Input
              placeholder="山田 太郎"
              h="50px"
              onChange={(e) => setName(e.target.value)}
            />
            <Text color="red">{formError.name}</Text>
          </Box>
          <Box>
            <SubTitle children="comment" />
            <Textarea
              placeholder="コメントを入れてください"
              minHeight="180px"
              onChange={(e) => setText(e.target.value)}
            />
            <Text color="red">{formError.text}</Text>
          </Box>
        </ModalBody>
        <ModalFooter padding="0 0 30px">
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentModal;

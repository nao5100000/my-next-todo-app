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
} from "@chakra-ui/react";
import SubTitle from "../atoms/text/SubTitle";

const CommentModal = ({ isOpen, onClose }) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <ModalCloseButton />
        <ModalBody padding="30px">
          <Box marginBottom="30px">
            <SubTitle children="name" />
            <Input placeholder="山田 太郎" h="50px" />
          </Box>
          <Box>
            <SubTitle children="comment" />
            <Textarea
              placeholder="コメントを入れてください"
              minHeight="180px"
            />
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
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentModal;

import {
  Box,
  Container,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import CommentButton from "../src/atoms/button/CommentButton";
import DetailTodoTitle from "../src/atoms/text/DetailTodoTitle";
import SubTitle from "../src/atoms/text/SubTitle";
import Title from "../src/atoms/text/Title";
import CommentItem from "../src/molucules/CommentItem";
import Header from "../src/organisms/Header";

const DetailTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <main>
        <Header />
        <Container
          maxWidth="1200px"
          width="90%"
          marginTop="100px"
          marginBottom="90px"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Flex justify="space-between" w="100%">
            <Title children="Todo Details" />
            <CommentButton onOpen={onOpen} />
          </Flex>
          <Box w="70%">
            <Box marginBottom="36px">
              <DetailTodoTitle children="Title" />
              <Text padding="0 20px">タイトルが入ります</Text>
            </Box>
            <Box>
              <DetailTodoTitle children="Details" />
              <Text padding="0 20px">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </Text>
            </Box>
          </Box>
          <CommentItem />
        </Container>
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
      </main>
    </>
  );
};

export default DetailTodo;

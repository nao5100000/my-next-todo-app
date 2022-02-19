import { Box, Container, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CommentButton from "../src/atoms/button/CommentButton";
import DetailTodoTitle from "../src/atoms/text/DetailTodoTitle";
import Title from "../src/atoms/text/Title";
import CommentItem from "../src/molucules/CommentItem";
import CommentModal from "../src/molucules/CommentModal";
import Header from "../src/organisms/Header";

const DetailTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
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
              <Text padding="0 20px">{router.query.title}</Text>
            </Box>
            <Box>
              <DetailTodoTitle children="Details" />
              <Text padding="0 20px">{router.query.details}</Text>
            </Box>
          </Box>
          <CommentItem />
        </Container>
        <CommentModal isOpen={isOpen} onClose={onClose} />
      </main>
    </>
  );
};

export default DetailTodo;

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import CommentButton from "../src/atoms/button/CommentButton";
import DetailTodoTitle from "../src/atoms/text/DetailTodoTitle";

import Title from "../src/atoms/text/Title";
import CommentItem from "../src/molucules/CommentItem";
import Header from "../src/organisms/Header";

const DetailTodo = () => {
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
            <CommentButton />
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
      </main>
    </>
  );
};

export default DetailTodo;

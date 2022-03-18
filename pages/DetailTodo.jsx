import { Box, Container, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { commentState } from "../src/hooks/commentState";
import { useRecoilValue, useRecoilState } from "recoil";
import { useRouter } from "next/router";
import CommentButton from "../src/atoms/button/CommentButton";
import DetailTodoTitle from "../src/atoms/text/DetailTodoTitle";
import Title from "../src/atoms/text/Title";
import CommentItem from "../src/molucules/CommentItem";
import CommentModal from "../src/molucules/CommentModal";
import Header from "../src/organisms/Header";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-preview/markdown.css";
import { todoState } from "../src/hooks/TodoState";
import { editState } from "../src/hooks/EditState";

const DetailTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
  );

  const todos = useRecoilValue(todoState);
  const [detailTodo, setDetailTodo] = useState({});
  useEffect(() => {
    if (router.query.id) {
      const newTodos = [...todos].find((item) => {
        return JSON.stringify(item.id) === router.query.id;
      });
      setDetailTodo(newTodos);
    } else {
      router.push("/");
    }
  }, []);

  //const [detailsComments, setDetailComments] = useState([]);
  const comments = useRecoilValue(commentState);
  const targetComments = comments.filter(
    (item) => item.todoId === router.query.id
  );

  const [commentEditBoolean, setCommentEditBoolean] = useState(false);
  const [commentEdit, setCommentEdit] = useRecoilState(editState);
  const handleCommentEdit = (id) => {
    const newEditComment = [...comments].find((item) => item.id === id);
    setCommentEdit(newEditComment);
  };
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
              <Text padding="0 20px">{detailTodo.title}</Text>
            </Box>
            <Box>
              <DetailTodoTitle children="Details" />
              <MarkdownPreview source={detailTodo.details} />
            </Box>
          </Box>
          <Box w="25%">
            {targetComments.map((comment, index) => (
              <CommentItem
                key={index}
                comment={comment}
                onOpen={onOpen}
                detailTodoId={detailTodo.id}
                setCommentEditBoolean={setCommentEditBoolean}
                handleCommentEdit={handleCommentEdit}
              />
            ))}
          </Box>
        </Container>
        <CommentModal
          isOpen={isOpen}
          onClose={onClose}
          detailTodoId={detailTodo.id}
          commentEditBoolean={commentEditBoolean}
          setCommentEditBoolean={setCommentEditBoolean}
        />
      </main>
    </>
  );
};

export default DetailTodo;

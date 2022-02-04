import { Box, Container } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import Title from "../src/atoms/text/Title";
import Header from "../src/organisms/Header";
import TodoItem from "../src/organisms/TodoItem";

const TrashTodo = () => {
  return (
    <>
      <main>
        <Header />
        <Container maxWidth="960px" marginTop="100px" marginBottom="90px">
          <Box display="flex" alignItems="center">
            <Title children="Trash" />
          </Box>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <TodoItem />
            <TodoItem />
          </Masonry>
        </Container>
      </main>
    </>
  );
};

export default TrashTodo;

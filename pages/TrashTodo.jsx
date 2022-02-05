import { Box, Container } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import Masonry from "react-masonry-css";
import Title from "../src/atoms/text/Title";
import Header from "../src/organisms/Header";
import TodoItem from "../src/organisms/TodoItem";

const TrashTodo = () => {
  const iconStyle = {
    marginBottom: "30px",
    marginLeft: "10px",
    color: "blue.400",
  };
  return (
    <>
      <main>
        <Header />
        <Container
          maxWidth="960px"
          width="90%"
          marginTop="100px"
          marginBottom="90px"
        >
          <Box display="flex" alignItems="center">
            <Title children="Trash" />
            <BiTrash fontSize="1.8rem" style={iconStyle} />
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

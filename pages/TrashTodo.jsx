import { useRecoilState } from "recoil";
import { deleteState } from "../src/hooks/DeleteState";
import { Box, Container } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import Masonry from "react-masonry-css";
import Title from "../src/atoms/text/Title";
import Header from "../src/organisms/Header";
import DeleteTodoItem from "../src/organisms/DeleteTodoItem";

const TrashTodo = () => {
  const iconStyle = {
    marginBottom: "30px",
    marginLeft: "10px",
    color: "blue.400",
  };

  const [deleteTodos, setDeleteTodos] = useRecoilState(deleteState);

  const handleDelete = () => {
    let newDeleteTodos = [...deleteTodos].filter(
      (item) => item.isChecked === false
    );
    setDeleteTodos(newDeleteTodos);
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
            <BiTrash
              fontSize="1.8rem"
              style={iconStyle}
              cursor="pointer"
              onClick={() => handleDelete()}
            />
          </Box>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {deleteTodos?.map((item) => (
              <DeleteTodoItem key={item.id} item={item} />
            ))}
          </Masonry>
        </Container>
      </main>
    </>
  );
};

export default TrashTodo;

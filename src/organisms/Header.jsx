import { useEffect, useState } from "react";
import { Box, Container, Text, HStack, Link } from "@chakra-ui/react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import SearchForm from "../molucules/SearchForm";
import { createDate } from "../hooks/date";

const Header = (props) => {
  const { updateSearchKeyword, setSearchStatus, setSearchPriority, isIndex } =
    props;

  const [date, setDate] = useState(createDate());
  useEffect(() => {
    setInterval(() => {
      setDate(createDate());
    }, 1000);
  }, [date]);

  return (
    <>
      <Box
        background="blue.400"
        position="fixed"
        width="100%"
        top="0"
        zIndex="100"
      >
        <Container maxWidth="1200px" width="90%">
          <HStack
            justify="space-between"
            alignItems="center"
            height="60px"
            color="White"
          >
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Link href="/">
                <BsFillHouseDoorFill fontSize="1.5rem" />
              </Link>
              <Text
                fontSize="1.5rem"
                fontWeight="bold"
                marginLeft="10px"
                whiteSpace="nowrap"
              >
                Todo app
              </Text>
            </Box>
            {isIndex && (
              <SearchForm
                updateSearchKeyword={updateSearchKeyword}
                setSearchStatus={setSearchStatus}
                setSearchPriority={setSearchPriority}
              />
            )}
            <Text fontSize=".9rem">{date}</Text>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Header;

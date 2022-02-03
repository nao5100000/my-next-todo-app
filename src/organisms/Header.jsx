import { Box, Container, Text, HStack } from "@chakra-ui/react";
import SearchForm from "../molucules/SearchForm";

const Header = () => {
  return (
    <>
      <Box background="blue.400" position="fixed" width="100%" top="0">
        <Container maxWidth="1200px" width="90%">
          <HStack
            justify="space-between"
            alignItems="center"
            height="60px"
            color="White"
          >
            <Text fontSize="1.5rem" fontWeight="bold">
              Todo app
            </Text>
            <SearchForm />
            <Text fontSize=".9rem">2022/01/01</Text>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Header;

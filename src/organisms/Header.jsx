import { Box, Container, Text, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box background="blue.400">
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
            <Text fontSize=".9rem">2022/01/01</Text>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Header;

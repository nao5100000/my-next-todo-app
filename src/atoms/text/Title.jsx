import { Text } from "@chakra-ui/react";

const Title = ({ children }) => {
  return (
    <>
      <Text
        color="blue.400"
        fontWeight="bold"
        fontSize="2.1rem"
        marginBottom="30px"
      >
        {children}
      </Text>
    </>
  );
};
export default Title;

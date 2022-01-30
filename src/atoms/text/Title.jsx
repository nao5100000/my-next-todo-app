import { Text } from "@chakra-ui/react";

const Title = ({ children }) => {
  return (
    <>
      <Text color="blue.400" fontWeight="bold" fontSize="1.6rem">
        {children}
      </Text>
    </>
  );
};
export default Title;

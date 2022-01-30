import { Text } from "@chakra-ui/react";

const SubTitle = ({ children }) => {
  return (
    <>
      <Text
        color="gray.600"
        fontWeight="bold"
        fontSize="1.3rem"
        marginBottom="10px"
      >
        {children}
      </Text>
    </>
  );
};
export default SubTitle;

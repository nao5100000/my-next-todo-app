import { Box, Input } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const TitleInput = () => {
  return (
    <>
      <Box padding="30px" bg="blue.50">
        <SubTitle children={"Title"} />
        <Input
          placeholder="タイトルを入力してください"
          borderRadius="3px"
          marginBottom="30px"
          height="58px"
          bg="White"
        />
      </Box>
    </>
  );
};

export default TitleInput;

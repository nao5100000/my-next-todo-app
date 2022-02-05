import { Box, Input } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const TitleInput = () => {
  return (
    <>
      <Box marginBottom="30px">
        <SubTitle children="タイトル" />
        <Input
          placeholder="タイトルを入力してください"
          borderRadius="3px"
          height="58px"
          bg="White"
          boxShadow="1px 1px 3px 1px rgb(0 0 0 / 10%) inset"
          bg="#f7f7f7"
        />
      </Box>
    </>
  );
};

export default TitleInput;
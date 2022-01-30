import { Input } from "@chakra-ui/react";
import SubTitle from "../text/SubTitle";

const TitleInput = () => {
  return (
    <>
      <SubTitle children={"Title"} />
      <Input placeholder="タイトルを入力してください" borderRadius="3px" />
    </>
  );
};

export default TitleInput;

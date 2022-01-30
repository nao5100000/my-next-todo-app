import { Textarea } from "@chakra-ui/react";
import SubTitle from "../text/SubTitle";

const DetailTextarea = () => {
  return (
    <>
      <SubTitle children={"comment"} />
      <Textarea placeholder="Here is a sample placeholder" />
    </>
  );
};

export default DetailTextarea;

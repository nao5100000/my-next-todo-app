import { Box, Textarea } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const DetailTextarea = () => {
  return (
    <>
      <Box>
        <SubTitle children="comment" />
        <Textarea
          placeholder="Here is a sample placeholder"
          minHeight="250px"
        />
      </Box>
    </>
  );
};

export default DetailTextarea;

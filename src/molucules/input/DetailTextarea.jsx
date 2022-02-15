import { Box, Textarea } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const DetailTextarea = (props) => {
  const { details, setDetails } = props;
  return (
    <>
      <Box marginBottom="30px">
        <SubTitle children="詳細" />
        <Textarea
          placeholder="Here is a sample placeholder"
          minHeight="250px"
          boxShadow="1px 1px 3px 1px rgb(0 0 0 / 10%) inset"
          bg="#f7f7f7"
        />
      </Box>
    </>
  );
};

export default DetailTextarea;

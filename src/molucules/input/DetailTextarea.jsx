import { Box } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";
import MarkDown from "../../atoms/MarkDown";

const DetailTextarea = (props) => {
  const { details, setDetails } = props;

  return (
    <Box marginBottom="30px">
      <SubTitle children="Details" />
      <MarkDown details={details} setDetails={setDetails} />
    </Box>
  );
};

export default DetailTextarea;

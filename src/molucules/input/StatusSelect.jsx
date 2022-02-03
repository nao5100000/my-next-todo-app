import { Select, Box } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const StatusSelect = () => {
  return (
    <>
      <Box w="47%">
        <SubTitle children="進捗" height="55px" />
        <Select placeholder="進捗状況">
          <option value="option1">未着手</option>
          <option value="option2">進行中</option>
          <option value="option3"></option>
        </Select>
      </Box>
    </>
  );
};

export default StatusSelect;

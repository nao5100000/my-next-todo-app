import { Select, Box } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";

const StatusSelect = ({ setStatus }) => {
  const selectChangeValue = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <Box w="47%">
        <SubTitle children="進捗" height="55px" />
        <Select placeholder="進捗状況" onChange={selectChangeValue}>
          <option value="未着手">未着手</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </Select>
      </Box>
    </>
  );
};

export default StatusSelect;

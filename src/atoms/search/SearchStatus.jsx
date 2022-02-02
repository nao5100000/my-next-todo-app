import { Select } from "@chakra-ui/react";

const SearchStatus = () => {
  return (
    <Select
      placeholder="------"
      w="25%"
      border="none"
      bg="blue.500"
      borderRadius="3px"
      fontSize=".9rem"
    >
      <option value="notStarted">未着手</option>
      <option value="doing">進行中</option>
      <option value="done">完了</option>
    </Select>
  );
};

export default SearchStatus;

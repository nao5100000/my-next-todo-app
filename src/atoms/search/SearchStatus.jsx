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
      boxShadow="1px 1px 3px 1px rgb(0 0 0 / 10%) inset"
    >
      <option value="notStarted">未着手</option>
      <option value="doing">進行中</option>
      <option value="done">完了</option>
    </Select>
  );
};

export default SearchStatus;

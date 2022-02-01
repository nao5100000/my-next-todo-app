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
      <option value="notStarted">Not Started</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </Select>
  );
};

export default SearchStatus;

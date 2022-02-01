import { Select } from "@chakra-ui/react";

const SearchPriority = () => {
  return (
    <Select
      placeholder="------"
      w="25%"
      border="none"
      bg="blue.500"
      borderRadius="3px"
      fontSize=".9rem"
    >
      <option value="low">Low</option>
      <option value="middle">Middle</option>
      <option value="heigh">High</option>
    </Select>
  );
};

export default SearchPriority;

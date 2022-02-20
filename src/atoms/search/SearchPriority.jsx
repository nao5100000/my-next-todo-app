import { Select } from "@chakra-ui/react";

const SearchPriority = ({ setSearchPriority }) => {
  const handleSearchPriority = (e) => {
    setSearchPriority(e.target.value);
  };
  return (
    <Select
      placeholder="------"
      w="25%"
      border="none"
      bg="blue.500"
      borderRadius="3px"
      fontSize=".9rem"
      boxShadow="1px 1px 3px 1px rgb(0 0 0 / 10%) inset"
      onChange={handleSearchPriority}
    >
      <option value="low">Low</option>
      <option value="middle">Middle</option>
      <option value="high">High</option>
    </Select>
  );
};

export default SearchPriority;

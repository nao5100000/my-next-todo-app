import { Select } from "@chakra-ui/react";

const SearchPriority = () => {
  return (
    <Select placeholder="------">
      <option value="low">Low</option>
      <option value="middle">Middle</option>
      <option value="heigh">High</option>
    </Select>
  );
};

export default SearchPriority;

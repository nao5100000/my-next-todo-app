import { Select } from "@chakra-ui/react";

const SearchStatus = () => {
  return (
    <Select placeholder="Select option">
      <option value="notStarted">Not Started</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </Select>
  );
};

export default SearchStatus;

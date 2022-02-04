import { Select } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";

const SortSelect = () => {
  return (
    <Select icon={<BiSortAlt2 />} w="130px" marginRight="30px" fontSize=".9rem">
      <option value="">並びかえ</option>
      <option value="">Status順</option>
      <option value="">進捗順</option>
    </Select>
  );
};

export default SortSelect;

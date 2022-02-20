import { HStack } from "@chakra-ui/react";

import SearchInput from "../atoms/search/SearchInput";
import SearchPriority from "../atoms/search/SearchPriority";
import SearchStatus from "../atoms/search/SearchStatus";

const SearchForm = ({ onInput }) => {
  return (
    <>
      <HStack w="70%">
        <SearchInput onInput={onInput} />
        <SearchPriority />
        <SearchStatus />
      </HStack>
    </>
  );
};

export default SearchForm;

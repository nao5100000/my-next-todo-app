import { HStack } from "@chakra-ui/react";

import SearchInput from "../atoms/search/SearchInput";
import SearchPriority from "../atoms/search/SearchPriority";
import SearchStatus from "../atoms/search/SearchStatus";

const SearchForm = () => {
  return (
    <>
      <HStack w="70%">
        <SearchInput />
        <SearchPriority />
        <SearchStatus />
      </HStack>
    </>
  );
};

export default SearchForm;

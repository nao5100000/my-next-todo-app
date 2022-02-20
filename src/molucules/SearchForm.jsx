import { HStack } from "@chakra-ui/react";

import SearchInput from "../atoms/search/SearchInput";
import SearchPriority from "../atoms/search/SearchPriority";
import SearchStatus from "../atoms/search/SearchStatus";

const SearchForm = ({
  updateSearchKeyword,
  setSearchStatus,
  setSearchPriority,
}) => {
  return (
    <>
      <HStack w="70%">
        <SearchInput updateSearchKeyword={updateSearchKeyword} />
        <SearchPriority setSearchPriority={setSearchPriority} />
        <SearchStatus setSearchStatus={setSearchStatus} />
      </HStack>
    </>
  );
};

export default SearchForm;

import SearchInput from "../src/atoms/search/SearchInput";
import SearchPriority from "../src/atoms/search/SearchPriority";
import SearchStatus from "../src/atoms/search/SearchStatus";

const test = () => {
  return (
    <>
      <SearchInput />
      <SearchStatus />
      <SearchPriority />
    </>
  );
};

export default test;

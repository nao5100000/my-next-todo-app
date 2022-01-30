import SearchInput from "../src/atoms/search/SearchInput";
import SearchPriority from "../src/atoms/search/SearchPriority";
import SearchStatus from "../src/atoms/search/SearchStatus";
import Title from "../src/atoms/text/Title";

const test = () => {
  return (
    <>
      <Title children={"こんにちは"} />
      <SearchInput />
      <SearchStatus />
      <SearchPriority />
    </>
  );
};

export default test;

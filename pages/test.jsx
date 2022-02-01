import RadioPriority from "../src/atoms/input/RadioPriority";
import TitleInput from "../src/atoms/input/TitleInput";
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
      <TitleInput />
      <RadioPriority />
    </>
  );
};

export default test;

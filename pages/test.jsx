import RadioPriority from "../src/atoms/input/RadioPriority";
import TitleInput from "../src/atoms/input/TitleInput";
import SearchInput from "../src/atoms/search/SearchInput";
import SearchPriority from "../src/atoms/search/SearchPriority";
import SearchStatus from "../src/atoms/search/SearchStatus";
import Tag from "../src/atoms/tags/tag";
import Title from "../src/atoms/text/Title";
import Header from "../src/organisms/Header";

const test = () => {
  return (
    <>
      <Header />
      <Title children={"こんにちは"} />
      <SearchInput />
      <SearchStatus />
      <SearchPriority />
      <TitleInput />
      <RadioPriority />
      <Tag children={"時間"} />
    </>
  );
};

export default test;

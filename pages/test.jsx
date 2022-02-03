import DeleteButton from "../src/atoms/button/DeleteButton";
import NewButton from "../src/atoms/button/NewButton";
import TrashButton from "../src/atoms/button/TrashButton";
import RadioPriority from "../src/atoms/input/RadioPriority";
import TitleInput from "../src/molucules/input/TitleInput";
import DateTag from "../src/atoms/tags/DateTag";
import Tag from "../src/atoms/tags/tag";
import Title from "../src/atoms/text/Title";
import SearchForm from "../src/molucules/SearchForm";
import TagWrapper from "../src/molucules/TagWrapper";
import Header from "../src/organisms/Header";
import TodoItem from "../src/organisms/TodoItem";

const test = () => {
  return (
    <>
      <Header />
      <Title children={"こんにちは"} />
      <TitleInput />
      <RadioPriority />
      <Tag children={"時間"} />
      <TrashButton />
      <NewButton />
      <TodoItem />
      <DeleteButton />
      <DateTag />
      <TagWrapper />
    </>
  );
};

export default test;

import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = ({ onInput }) => {
  return (
    <InputGroup
      bg="blue.500"
      borderRadius="3px"
      boxShadow="1px 1px 3px 1px rgb(0 0 0 / 10%) inset"
    >
      <Input
        type="tel"
        placeholder="検索"
        border="none"
        fontSize=".9rem"
        onInput={onInput}
      />
      <InputRightElement
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
    </InputGroup>
  );
};
export default SearchInput;

import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup>
      <Input type="tel" placeholder="Phone number" />
      <InputRightElement
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
    </InputGroup>
  );
};

export default SearchInput;

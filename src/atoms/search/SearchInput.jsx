import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup bg="blue.500" borderRadius="3px">
      <Input
        type="tel"
        placeholder="Phone number"
        border="none"
        fontSize=".9rem"
      />
      <InputRightElement
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
    </InputGroup>
  );
};

export default SearchInput;

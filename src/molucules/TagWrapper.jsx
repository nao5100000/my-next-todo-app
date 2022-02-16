import { HStack } from "@chakra-ui/react";
import DateTag from "../atoms/tags/DateTag";
import Tag from "../atoms/tags/tag";

const TagWrapper = ({ todoPriority }) => {
  return (
    <>
      <HStack position="absolute" bottom="20px" left="20px">
        <DateTag />
        <Tag children="未着手" />
        <Tag>{todoPriority}</Tag>
      </HStack>
    </>
  );
};

export default TagWrapper;

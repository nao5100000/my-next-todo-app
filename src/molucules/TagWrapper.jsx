import { HStack } from "@chakra-ui/react";
import DateTag from "../atoms/tags/DateTag";
import Tag from "../atoms/tags/tag";

const TagWrapper = ({ todoPriority, todoStatus }) => {
  return (
    <>
      <HStack position="absolute" bottom="20px" left="20px">
        <DateTag />
        <Tag>{todoStatus}</Tag>
        <Tag>{todoPriority}</Tag>
      </HStack>
    </>
  );
};

export default TagWrapper;

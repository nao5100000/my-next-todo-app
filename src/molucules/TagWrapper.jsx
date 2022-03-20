import { HStack } from "@chakra-ui/react";
import DateTag from "../atoms/tags/DateTag";
import Tag from "../atoms/tags/tag";

const TagWrapper = ({ todoSingle }) => {
  return (
    <>
      <HStack position="absolute" bottom="20px" left="20px">
        <DateTag todoSingle={todoSingle} />
        <Tag>{todoSingle.priority}</Tag>
        <Tag>{todoSingle.status}</Tag>
      </HStack>
    </>
  );
};

export default TagWrapper;

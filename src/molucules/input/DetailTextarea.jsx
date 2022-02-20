import { Box, Textarea } from "@chakra-ui/react";
import SubTitle from "../../atoms/text/SubTitle";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const DetailTextarea = (props) => {
  const { details, setDetails } = props;
  const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
  );
  return (
    <>
      <Box marginBottom="30px">
        <SubTitle children="詳細" />
        <MDEditor value={details} onChange={setDetails} />
      </Box>
    </>
  );
};

export default DetailTextarea;

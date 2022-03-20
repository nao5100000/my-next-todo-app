import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MarkDown = ({ details, setDetails }) => {
  const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
  );
  return <MDEditor value={details} onChange={setDetails} />;
};

export default MarkDown;

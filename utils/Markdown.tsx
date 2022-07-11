import ReactMarkdown from "react-markdown";
type Props = {
  // children is able to be rendered in jsx
  children: string
}
export const MarkdownComponent = (props: Props) => {
  return <ReactMarkdown className="markdown">{props.children}</ReactMarkdown>;
};

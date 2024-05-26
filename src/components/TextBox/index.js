import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import "katex/dist/katex.min.css";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Box, Code } from "@chakra-ui/react";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeComponent =
  (style) =>
  ({ children, className, node, ...rest }) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <>
        <Box bg="gray.300" color="white" p={1} roundedTop="md">
          <Code fontSize="sm">{match[1]}</Code>
        </Box>
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          className="rounded-md"
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={style}
        />
      </>
    ) : (
      <Code {...rest} className={className} rounded="md" children={children} />
    );
  };

const blockQuoteComponent = ({ children }) => (
  <blockquote className="border-l-4 rounded-sm border-blue-200 bg-gray-30 p-4 my-4 mx-2 italic text-gray-600">
    {children}
  </blockquote>
);


/**
 * Renders a markdown text in a
 * @param {*} param0
 * @returns
 */
export default function TextBox({ text }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={ChakraUIRenderer({
        code: codeComponent(coldarkDark),
        blockquote: blockQuoteComponent,
      })}
      children={text}
    />
  );
}

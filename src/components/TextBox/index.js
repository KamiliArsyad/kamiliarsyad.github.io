import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import "katex/dist/katex.min.css";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Box, Image, Table, TableContainer } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";

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
export default function TextBox({ text, color = "inherit" }) {
  const markdownComponents = useMemo(
    () =>
      ChakraUIRenderer({
        p: ({ children, node, ...props }) => (
          <p
            style={{
              color: color,
              marginBottom: "1rem",
              overflowWrap: "anywhere",
            }}
            {...props}
          >
            {children}
          </p>
        ),
        span: ({ children, node, ...props }) => (
          <span style={{ color: color }} {...props}>
            {children}
          </span>
        ),
        a: ({ children, href, node, ...props }) => {
          const isExternal = /^https?:\/\//i.test(href || "");

          return (
            <a
              style={{ color: "blue" }}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              {...props}
            >
              {children}
            </a>
          );
        },
        code: CodeBlock,
        pre: ({ node, ...props }) => (
          <Box as="div" maxW="100%" minW={0} mb={4} {...props} />
        ),
        table: ({ children, node, ...props }) => (
          <TableContainer maxW="100%" overflowX="auto" mb={4}>
            <Table {...props}>{children}</Table>
          </TableContainer>
        ),
        img: ({ node, ...props }) => <Image maxW="100%" h="auto" {...props} />,
        blockquote: blockQuoteComponent,
      }),
    [color]
  );

  return (
    <Box minW={0} maxW="100%">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={markdownComponents}
        children={text}
      />
    </Box>
  );
}

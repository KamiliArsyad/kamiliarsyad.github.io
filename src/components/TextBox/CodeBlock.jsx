import { Box, Code } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ children, className, node, ...rest }) {
  const match = /language-(\w+)/.exec(className || "");

  if (!match) {
    return (
      <Code
        {...rest}
        className={className}
        rounded="md"
        whiteSpace="pre-wrap"
        wordBreak="break-word"
      >
        {children}
      </Code>
    );
  }

  const language = match[1];

  return (
    <Box maxW="100%" minW={0} borderRadius="md" overflow="hidden">
      <Box bg="gray.300" color="white" p={1}>
        <Code fontSize="sm" aria-hidden="true">
          {language}
        </Code>
      </Box>
      <Box maxW="100%" overflowX="auto">
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          language={language}
          style={coldarkDark}
          customStyle={{ margin: 0, borderRadius: 0 }}
        />
      </Box>
    </Box>
  );
}

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import TextInputMD from "../components/TextInputMD";
import { DrawerItem } from "../components/DrawerItem";
import { BlogDrawer } from "../components/BlogDrawer";
import { useState } from "react";
import Post from "../components/Post";
import TextBox from "../components/TextBox";

const markdownContent = `
# Kamiliarsyad's Markdown Test Document

## Introduction

Welcome to the test document. This document is designed to test various markdown features including **text formatting**, \`code snippets\`, and mathematical expressions.

## Text Formatting

- **Bold Text**: **This is bold text**
- *Italic Text*: *This is italic text*
- Combined: **_bold and italic_** 

Quotes:
> This is a quote.
> This quote contains ~~strikethrough~~, **bold**, and even \`code\`.

Block of quotes:
\`\`\`
This is a block of quotes.
\`\`\`

## Code Snippets

Here is an example of inline code: \`for(int i=0; i<10; i++)\`.

### JavaScript Code Block

\`\`\`javascript
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

### Python Code Block

\`\`\`python
def hello_world():
    print("Hello, world!")
\`\`\`

## Lists
* [ ] todo
* [x] done
 
A table:
 
| a | b |
| - | - |
| 1 | 2 |

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- Item one
- Item two
- Item three

## Mathematical Expressions

The lift coefficient ($C_L$) is a dimensionless coefficient.

Inline math expressions using LaTeX, like ($e^{i\\pi\} + 1 = 0$), can be rendered in markdown.

### Block Math Expression

$\\int_{-\\infty}^\\infty e^{-x^2} dx = \\sqrt{\\pi}$

$[\\begin{matrix} 1 & 0 \\\\ 0 & 1 \\end{matrix}]$

## Conclusion

This concludes the markdown test document. Adjust and expand upon this template based on your specific renderer capabilities and requirements.
`;

// Blank page for development
export default function Dev() {
  return (
    <>
      <Post post={{ title: "Test", body: markdownContent }} />
    </>
  );
}

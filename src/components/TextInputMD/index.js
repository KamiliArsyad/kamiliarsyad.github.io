import {
  Box,
  Divider,
  Grid,
  Heading,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Post from "../Post";

export default function TextInputMD() {
  let [text, setText] = useState(default_text);

  const handleChange = (e) => setText(e.target.value);

  return (
    <Stack w="100%" h="90%" spacing={2} mx="auto" px={2}>
      <Heading fontSize="3xl">Online Markdown Editor</Heading>
      <Divider />
      <Grid
        templateColumns="1fr 1fr" // Split into two equal columns
        gap={2}
        w="100%"
        h="100%" // Set height to fill the parent
        px={6}
      >
        <Box bg="gray.100">
          <Textarea
            placeholder={text}
            resize="none"
            h="100%" // Set height to 100% to fill the grid cell
            onChange={handleChange}
          />
        </Box>
        <Box
          h="100%"
          border="1px"
          borderColor="gray.200"
        >
          <Post post={{ body: text }} />
        </Box>
      </Grid>
    </Stack> 
  );
}

const default_text = `
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

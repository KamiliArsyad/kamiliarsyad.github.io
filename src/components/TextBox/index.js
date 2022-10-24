import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


export default function TextBox({ text }) {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={ChakraUIRenderer()} children={text} skipHtml />
    </div>
  );
}
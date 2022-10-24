import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';


export default function TextBox({ text }) {
  return (
    <div>
      <ReactMarkdown components={ChakraUIRenderer()} children={text} skipHtml />
    </div>
  );
}
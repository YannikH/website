import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown = ({file}) => {
  const [markdownText, setMarkdownText] = useState();

  useEffect(() => {
    fetch(file)
      .then(res => res.text())
      .then(text => setMarkdownText(text))
  });

  return (<ReactMarkdown>{markdownText}</ReactMarkdown>);
};

export default MarkDown;
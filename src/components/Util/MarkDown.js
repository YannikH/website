import { Alert, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown = ({filename}) => {
  const [markdownText, setMarkdownText] = useState();
  useEffect(() => {
    const file = new Request(`/markdown/${filename}.md`)
    fetch(file)
      .then(res => res.text())
      .then(text => setMarkdownText(text))
  });

  if (!filename) return <></>
  if (markdownText && markdownText.includes("<!DOCTYPE html>")) return (
    <Box mt={3}>
      <Alert severity="error">Somethign went wrong loading the page contents!</Alert>
    </Box>
  )
  return (<ReactMarkdown>{markdownText}</ReactMarkdown>);
};

export default MarkDown;
import { Alert, Box, LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const LoadingError = () => (
  <Box mt={3} sx={{ display: 'flex' }}>
    <Alert severity="error">Somethign went wrong loading the page contents!</Alert>
  </Box>
)

const LoadingProgress = () => (
  <Box mt={3}>
    <LinearProgress color="secondary" />
  </Box>
);

const MarkDown = ({filename}) => {
  const [markdownText, setMarkdownText] = useState();
  useEffect(() => {
    const file = new Request(`/markdown/${filename}.md`)
    fetch(file)
      .then(res => res.text())
      .then(text => setMarkdownText(text))
  });

  if (!filename) return <LoadingError></LoadingError>
  if (!markdownText) return <LoadingProgress></LoadingProgress>
  if (markdownText && markdownText.includes("<!DOCTYPE html>")) return <LoadingError></LoadingError>
  return (<ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>);
};

export default MarkDown;
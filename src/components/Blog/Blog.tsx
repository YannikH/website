import { Box, Card, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material';
import BlankLink from '../Util/BlankLink';
import BlogPage from './BlogPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Article from './Article';
import Editor from './Editor';
import React, { useEffect, useState } from 'react';
import GetBlogContent, { BlogContent } from './BlogAdapter';

const PreviewCard = ({title, preview, id}: {title: string; preview: string; id: string;}) => (
  <BlankLink to={`/blog/${id}`}>
    <Box pb={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          {preview}
        </CardContent>
      </Card>
    </Box>
  </BlankLink>
)

export const PreviewDisplay = ({articleCount}: {articleCount?: number}) => {
  const [blogContent, setBlogContent] = useState<BlogContent>()
  const [articlePreviews, setArticlePreviews] = useState<any>()
  useEffect(() => {
    if (blogContent) {
      const articlePreviewList = blogContent.map((art: any) => <><PreviewCard {...art}></PreviewCard></>)
      setArticlePreviews(articlePreviewList)
    } else {
      GetBlogContent().then(blogContent => setBlogContent(blogContent));
    }
  }, [blogContent]);
  if (articlePreviews) {
    return articleCount ? articlePreviews.slice(0, articleCount) : articlePreviews
  }
  return <></>
}

const BlogHome = () => {
  document.title = "Laser Guided Bullshit"
  return (
    <BlogPage>
      <PreviewDisplay />
    </BlogPage>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#cfd8dc',
      dark: '#9ea7aa',
      contrastText: '#000000',
    },
    secondary: {
      light: '#b2fab4',
      main: '#81c784',
      dark: '#519657',
      contrastText: '#000000',
    },
  }
});

const Blog = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<BlogHome/>}></Route>
      <Route path="/404" element={<NotFound/>}></Route>
      <Route path="/:articleId" element={<Article/>}></Route>
      <Route path="/editor" element={<Editor/>}></Route>
    </Routes>
  </ThemeProvider>
)

export default Blog

import { Box, Card, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material';
import BlankLink from '../Util/BlankLink';
import content from './content.json'
import BlogPage from './BlogPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Article from './Article';
import Editor from './Editor';

const PreviewCard = ({title, preview, id}) => (
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

const BlogHome = () => {
  const articlePreviewList = content.pages.map(art => <><PreviewCard {...art}></PreviewCard></>)
  document.title = "Laser Guided Bullshit"
  return (
    <BlogPage>
      { articlePreviewList }
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
      <Route path="/Editor" element={<Editor/>}></Route>
    </Routes>
  </ThemeProvider>
)

export default Blog

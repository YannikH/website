import { Box, Card, CardContent, Typography } from '@mui/material';
import BlankLink from '../Util/BlankLink';
import content from './content.json'
import BlogPage from './BlogPage';

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

const Blog = () => {
  const articlePreviewList = content.pages.map(art => <><PreviewCard {...art}></PreviewCard></>)
  return (
    <BlogPage>
      { articlePreviewList }
    </BlogPage>
  );
}

export default Blog

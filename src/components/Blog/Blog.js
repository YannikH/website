import { Box, Button, Card, CardContent, CardHeader, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BlankLink from '../Util/BlankLink';
import content from './content.json'
import Navbar from './Navbar';

const PreviewCard = ({title, preview, id}) => (
  <BlankLink to={`/blog/${id}`}>
    <Box pt={2}>
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
    <div>
      <Navbar />
      <Container>
        <Stack>
          { articlePreviewList }
        </Stack>
      </Container>
    </div>
  );
}

export default Blog

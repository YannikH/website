import { Box, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";

const BlogPage = ({children}) => (
    <div>
      <Navbar />
      <Container>
        <Box mt={5}></Box>
        {children}
      </Container>
    </div>
);

export default BlogPage
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const BlogPage = ({children}: {children: React.ReactNode}) => (
    <div>
      <Navbar />
      <Container>
        <Box mt={5}></Box>
        {children}
      </Container>
    </div>
);

export default BlogPage
import { Typography } from "@mui/material";
import BlogPage from "./BlogPage";

const NotFound = () => {
  document.title = "Wrong turn!";
  return (
    <BlogPage>
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="h2">We think you might've taken a wrong turn here</Typography>
    </BlogPage>
  );
};

export default NotFound
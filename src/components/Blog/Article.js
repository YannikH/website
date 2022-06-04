import { Navigate, useParams } from "react-router-dom";
import BlogPage from "./BlogPage";
import content from './content.json'
import MarkDown from "../Util/MarkDown";
import { Container } from "@mui/material";

const Article = ({}) => {
  const { articleId } = useParams();
  const article = content.pages.find(page => articleId === page.id);
  if (!article) return <Navigate to="/blog/404"></Navigate>
  return (
    <BlogPage>
      <MarkDown filename={article.file}></MarkDown>
    </BlogPage>
  );
};

export default Article;
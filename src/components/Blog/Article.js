import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import content from './content.json'
import MarkDown from "../Util/MarkDown";
import { Container } from "@mui/material";

const Article = ({}) => {
  const { articleId } = useParams();
  const article = content.pages.find(page => articleId === page.id);
  return (
    <div>
      <Navbar />
      <Container>
        <MarkDown filename={article.file}></MarkDown>
      </Container>
    </div>
  );
};

export default Article;
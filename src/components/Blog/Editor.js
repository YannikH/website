import { Navigate, useParams } from "react-router-dom";
import BlogPage from "./BlogPage";
import content from './content.json'
import MarkDown from "../Util/MarkDown";
import { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import Navbar from "./Navbar";
import { DriveFileRenameOutline, Visibility } from "@mui/icons-material";
import ls from "local-storage";

const Editor = () => {
  const storedText = ls("text");
  const defaultState = (storedText) ? storedText: "";
  const [articleContents, setArticleContents] = useState(defaultState);
  const [editing, setEditing] = useState(true);
  return (
    <div>
      <Navbar title={"Markdown Editor"}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => setEditing(true)}><DriveFileRenameOutline/></Button>
          <Button onClick={() => setEditing(false)}><Visibility/></Button>
        </ButtonGroup>
      </Navbar>
      <Box sx={{ display: 'flex' }} mt={2}>
        { editing ? 
          <Container>
            <TextField
              multiline
              onChange={event => {
                ls("text", event.target.value)
                setArticleContents(event.target.value)
              }}
              minRows={50}
              fullWidth
              value={articleContents}
            />
          </Container>
        : <></>}
        <Container>
          <ReactMarkdown>{articleContents}</ReactMarkdown>
        </Container>
      </Box>
    </div>
  );
};

export default Editor;
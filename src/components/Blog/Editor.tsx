import { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import Navbar from "./Navbar";
import { DriveFileRenameOutline, Visibility } from "@mui/icons-material";
import { get, set } from "local-storage";
import React from "react";

const Editor = () => {
  const storedText = get<string>("text");
  const defaultState = (storedText !== "") ? storedText: "";
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
                set("text", event.target.value)
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
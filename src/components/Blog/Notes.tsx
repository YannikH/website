import { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown';
import Navbar from "./Navbar";
import { ConstructionOutlined, DriveFileRenameOutline, FlashOnRounded, Visibility } from "@mui/icons-material";
import { get, set } from "local-storage";
import React from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";
import process from "./processor";
// import Currency from "nodejs-currency-converter"

const VariableTag = styled.span`
  color: #b35050;
  background-color: #e6e6e6;
  padding: 3px 10px;
  border-radius: 5px;
  border: solid 1px gray;
  margin-right: 10px;
`;

const MathOperation = (operator: string, left: number, right: number): number => {
  switch(operator) {
    case "/": return left / right;
    case "*": return left * right;
    case "x": return left * right;
    case "-": return left - right;
    case "+": return left + right;
  }
  return NaN
}

const advancedParseInt = (text: string): number => {
  const number = (text.match(/-?\d+/gm))
  if (number) return parseInt(number[0])
  return NaN
}

const Calculate = (text: string): string => {
  console.log('entering calculator with', text)
  let editedText = text;
  // parentheses
  const opening = text.indexOf("(")
  const closing = text.lastIndexOf(")")
  if (opening > -1 && closing > -1) {
    const subString = editedText.substring(opening + 1, closing)
    editedText = editedText.replace(subString, Calculate(subString))
    console.log("continuing after parentheses with ", editedText)
  }
  const regexes = [
    // /(-?\d+)|(\/|\*|x)/gm, //multdiv
    // /(-?\d+)|(\+|-)/gm, //addsub
    /^(\/|\*|x)$/g, //multdiv
    /^(\+|-)$/g, //addsub
  ]
  regexes.forEach(regexp => {
    // const split = editedText.match(regexp)
    const split = editedText.match(/(-?\d+)|((?<= )|\d)(\+|-|x|\/|\*)((?= )|\d)|(((?<= )|^).+?(?= ))/gm)
    console.log(split)
    split?.forEach((value, index) => {
      const splitCopy = [...split];
      const isOperator = value.match(regexp)
      // console.log('searching in', splitCopy, ' at ', index, ' with ', value)
      if (isOperator) {
        const left = splitCopy[index - 1]
        const right = splitCopy[index + 1]
        if(left && right) {
          
          const result = MathOperation(value, advancedParseInt(left), advancedParseInt(right))
          splitCopy.splice(index - 1, 3, `${result}`)
          console.log('calculating', left, value, right, 'with result = ', result, 'leftover function is ', split.join(' '))
          editedText =  Calculate(splitCopy.join(' '))
        }
      }
    })
  })
  console.log('outputting ' + editedText)
  return editedText
}

const Code = (args: any) => {
  const text = args.children[0];
  if (isVariable(text)) {
    return <VariableTag>{text}</VariableTag>
  }
  return <code>{text}</code>
}

const isVariable = (text: string) => {
  if (text.includes('\r\n')) return false;
  const varFindRegex = /(^|(?<= ))\S+ = ((\S+)(?=;)|.+$)/gm
  return (text.match(varFindRegex) ?? []).length > 0
}

const Notes = () => {
  const storedText = get<string>("text");
  const defaultVariables: {[key: string]: any} = {};
  const defaultState = (storedText !== "") ? storedText: "";
  const [articleContents, setArticleContents] = useState(defaultState);
  const [variables, setVariables] = useState(defaultVariables)
  const [editing, setEditing] = useState(true);

  const processText = (text: string) => {
    const stack: Array<string> = [];
    const lines = text.split("\n");
    const processedLines = lines.map(line => processLine(line, variables))
    // console.log(variables)
    // console.log(lines, processedLines)
    const output = processedLines.join("\r  \n")
    // console.log(text)
    // console.log(output)
    return output
  }
  
  const processLine = (line: string, variables: any) => {
    const editedText = insertVariables(line);
    const vars = extractVariables(editedText, variables)
    console.log(editedText)
    const calculatedText = Calculate(editedText)
    return (vars + calculatedText)
  }

  const insertVariables = (line: string) => {
    let outputText = line;
    const varRegex = /\$\w+((?=( |\))|$))/gm;
    const results = line.match(varRegex);
    results?.forEach(match => {
      console.log(match)
      const varName = match.replace('$', '');
      if (variables[varName]) {
        const regex = new RegExp(`\\${match}`);
        console.log(regex)
        outputText = outputText.replace(regex, variables[varName])
        console.log('replacing', line, "|||", varName, "|||", variables[varName])
        console.log(outputText)
      }
    });
    return outputText
  }
  
  const extractVariables = (text: string, variables: any) => {
    const varFindRegex = /(^|(?<= ))\S+ ?= ?((\S+)(?=;)|.+$)/gm
    const results = text.match(varFindRegex)
    const inlineVars: Array<string> = [];
    results?.forEach(res => {
      let [key, value] = res.split('=');
      key = key.replace('$', '')
      variables[key.trim()] = value.trim()
      inlineVars.push(`\`${key.trim()} = ${value.trim()}\``)
    })
    return inlineVars.join(' ')
  }

  const onChange = (text: string) => {
    set("text",text)
    setArticleContents(processText(text))
  }

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
            {/* <TextField
              multiline
              onChange={event => {
                set("text", event.target.value)
                setArticleContents(event.target.value)
              }}
              minRows={50}
              fullWidth
              value={articleContents}
            /> */}
            <Editor 
              height="90vh"
              theme="vs-dark"
              defaultLanguage="markdown"
              defaultValue={articleContents}
              onChange={(value) => onChange(value ?? "")}
            />
          </Container>
        : <></>}
        <Container>
          {articleContents }
        </Container>
        <Container>
          {/* <ReactMarkdown components={{ code: Code }}>{articleContents}</ReactMarkdown> */}
          <ReactMarkdown components={{ code: Code }}>{ articleContents }</ReactMarkdown>
        </Container>
      </Box>
    </div>
  );
};

export default Notes;
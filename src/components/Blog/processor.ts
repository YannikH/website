
let memory = [];
let stack = [];
let variables = {};


const process =  (text: string) => {
  memory = [];
  variables = {};
  stack = [];
  let words: Array<string> = [];
  const lines = text.split('\r\n')
  lines.forEach(line => {
    words.concat(['LINE:1'])
    words = words.concat(line.split(' '))
  })
  console.log(words)
  words.forEach((w, i) => {
    //processWords(w, words, i)
  })

  const InterpretorFactory = (command: string) => {

  }

  return text
}

export default process
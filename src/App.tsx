//import React from "https://esm.sh/react@17.0.1";
import { useState } from 'react';
import './App.css'
//import ReactMarkdown from 'react-markdown';
import {marked} from "https://esm.sh/marked";
//import gfm from 'remark-gfm';
//import { App } from './App.1';

marked.setOptions({
  breaks: true,
  });

export const defaultMarkdown = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  console.log("Function App is called!"); // This log is fine

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea
          name="editor"
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
        {/* <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div> */}
        <div id="preview"  dangerouslySetInnerHTML={{
      __html: marked(markdownText)
    }}/>
      </div>
    </div>
  );
}

export default App

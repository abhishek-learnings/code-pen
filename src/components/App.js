import Editor from "./Editor";
import React, { useState, useEffect } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [scrDoc, setScrDoc] = useState("");
  //const scrDoc = `

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScrDoc(`<html>
          <body> ${html} </body>
          <style> ${css} </style>
          <script> ${js} </script>
        </html>
      `)
    }, 250);

    return () => clearTimeout(timeout)
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="xml"
          value={css}
          onChange={setCss}
        />
        <Editor displayName="JS" language="xml" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={scrDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;

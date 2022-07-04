//this code is specific to the Markdown CDN
marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

//default example text to display in the editor & previewer on initial page load:
const markdownExample = `# Greetings visitor. Starting a line of markdown with a # produces a heading.

## And two #s produces a sub-heading...
### You can experiment with markdown in the text editor, 
#### And if you use proper markdown it will appear as appropriate HTML in the blue preview pane.

You can denote code with backticks like so: \`<div></div>\`

\`\`\`
// To write multiline code, put a line of triple backticks above and below the code.

function howToMultiLine(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can make text **bold** with double stars,
Or _italic_ by using underlines.
You can cross items out using double tildes like so: ~~crossing items out~~.

You can create [a link to a web page](https://www.coingecko.com/), with square brackets followed by an address in parentheses.

> You can create block quotes with a right-facing triangle bracket.

- You can create lists by using dashes.
  - Indenting the list items also changes the style of the bullet,
     - so you can group related items more clearly.


1. You can create numbered lists with numbers and periods.
4. If your list numbers are not sequential, markdown will make them sequential.
1. Markdown can also be used to embed images like so:

![bitcoin icon](https://digitadiko.com/modules/prestapress/uploads/32/38.png)
`;

//begin main component
function App() {

    const [text, setText] = React.useState(markdownExample);

    return (
        <div className="d-flex flex-column justify-content-between align-items-center text-left" id="background" style={{maxWidth: "100vw", backgroundColor: "#25b4da"}}>
            <div id="titleHouse">
            <h1 className="mb-4 text-light">Ben's Markdown Previewer</h1>
            <h2 className="text-light">Markdown is a simple and easy-to-learn toolset for formatting text.</h2>
            <h2 className="text-light">Try editing the text in the white box to see the markdown result in the blue box.</h2>
            </div>
            <div id="editorWrapping">
            <textarea name="text" id="editor" rows="10" className="textarea" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <Preview markdown={text}/>
        
        </div>
    );
}
//this subcomponent references the "marked" library to parse the markdown in the editor into the previewer
function Preview({markdown}){
    return (
      <div className="my-5 p-3 border border-dark rounded" style={{maxWidth: "100vw", backgroundColor: "#c8e1f9"}}
      dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),
      }}
      id="preview"
      ></div>
    );
  }

ReactDOM.render(<App/>, document.getElementById("root"));
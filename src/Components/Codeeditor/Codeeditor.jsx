import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import {themes} from 'prism-react-renderer';
import './Codeeditor.css'

const CodeEditor = () => {
    const [language,setlanguage]=useState('jsx');
  const [code, setCode] = useState(`
import React, { useEffect, useState } from 'react';
import Page from './Components/Page/Page';
import './Page.css'

function App() {
  return <>
    <div>Home Page</div>
    <Page/>
    </>
}
export default App;

    `);

  return (<>
    <div className='editorhead'>Simple Code Editor</div>
   <select className='languageselectoption'
   onChange={(ev)=>{setlanguage(ev.target.value);console.log(language)}}
   onInputCapture={(ev)=>{setlanguage(ev.target.value);console.log(language)}}

   >
    <option value="">Select Your Language</option>
    <option value="jsx">Jsx</option>
    <option value="javascript">Javascript</option>
    <option value="c++">C++</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
    <option value="dart">Dart</option>
   </select>
    <LiveProvider code={code} theme={themes.shadesOfPurple} language={language}>
      <LiveEditor onChange={newCode => setCode(newCode)} className='liveeditor' />
      <LivePreview />
    </LiveProvider>
    </>
  );
};

export default CodeEditor;
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';
import { javascript } from '@codemirror/lang-javascript';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const extensions = [javascript ({ jsx:true })];

// CSS part
const myStyle = {
  color:"white",
  backgroundColor: "grey",
  padding: "10px",
  margin: "6%",
  fontSize: "16px",
  fontFamily: "Arial",
  border: "1px solid black",
  borderRadius: "9px"
};

const myButtons = {
  margin : "10px",
  padding : "12px",
  color:"white",
  backgroundColor:"darkblue",
  borderRadius: "11px"
}

// MAIN part

const  App = () => {
  const [value, setValue] = React.useState("// Write your code here...");
  const [result, setResult] = React.useState('');
  const [valid, setValid] = React.useState("");
  const onChange = React.useCallback((val: React.SetStateAction<string>, _viewUpdate: any) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  const runCode = () => {
    try {
      eval(value);
      setResult('Code executed successfully! ');
      setValid("green");
    } catch(err) {
      setValid("red");
      setResult(""+err);
    }
  };
  return  <>
            <RouterProvider router={router} />
            <div style={myStyle}>
              <CodeMirror style={{margin: "10px"}} value={value} height="500px" theme={androidstudio} extensions={extensions} onChange={onChange} />
              <button style={myButtons} onClick={runCode}>Run Code</button>
              <h3 style={{color: valid, fontSize:"25px"}}>{result}</h3>
            </div>
          </>;
};

export default App;

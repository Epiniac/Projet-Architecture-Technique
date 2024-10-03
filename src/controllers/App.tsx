import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';
import { javascript } from '@codemirror/lang-javascript';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const extensions = [javascript ({ jsx:true })];

const  App = () => {
  const [value, setValue] = React.useState("// Write your code here...");
  const [result, setResult] = React.useState('');
  const onChange = React.useCallback((val: React.SetStateAction<string>, _viewUpdate: any) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  const runCode = () => {
    try {
      console.log('Running code...');
      eval(value);
      setResult('Code executed successfully!');
    } catch (err) {
      alert(err);
    }
  };
  return  <>
            <RouterProvider router={router} />
            <CodeMirror value={value} height="200px" theme={androidstudio} extensions={extensions} onChange={onChange} />
            <button onClick={runCode}>Run Code</button>
            <h3>{result}</h3>
          </>;
};

export default App;

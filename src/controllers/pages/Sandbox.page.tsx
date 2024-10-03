import { useState } from "react";
import axiosService, { EMethod, EOrigineApi, IDatas } from "../../services/axios.service";

const SandboxPage = () => {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<any>()

  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event)
    setCode(()=>event.target.value)
  }

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event)

    const datas : IDatas = {
      method: EMethod.POST,
      origineApi: EOrigineApi.SANDBOX,
      pathname: '', 
      body: {
        "code": code
      }
    }
    const response = await axiosService.send(datas)
    setResult(()=>response)
  }

  return (
    <div className="main">
      <div>
        <div>
          <header >
            <h2>Sandbox</h2>
            <p>Write your code and execute it</p>
          </header>
          
          <section id="code">
            <textarea onChange={(event)=>handleChange(event)}/>
            <button onClick={(event)=>handleClick(event)}>Execute</button>
            <div>
              <p>Result:</p>
              <pre>{result}</pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SandboxPage;
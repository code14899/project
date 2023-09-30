import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";

const address = "0x3d64226A740EC43B25a53596DA02208fc4214a7c";
    const Form = (props)=> {
        const [caseNo, setCaseNo] = useState("");
        const [caseName, setCaseName] = useState("");
        const [judge, setJudge] = useState("");
        const [lawyer1, setLawyer1] = useState("");
        const [lawyer2, setLawyer2] = useState("");
        const [client1, setClient1] = useState("");
        const [client2, setClient2] = useState("");
        const [verdict, setVerdict] = useState("");
        const [uri, setUri] = useState("");

    return (
      <div className="flex items-center justify-center w-auto mt-6">
        <div className="items-center justify-center ">
      <Card color="transparent" shadow={false}>
        <div className="text-3xl tracking-tighter text-center font-bold">
          Add case data
        </div>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-black" >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" placeholder="Case No." value={caseNo} className="bg-gray-200 p-3" onChange={(event) => { setCaseNo(event.target.value) }}/>
            <Input size="lg" placeholder="Case Name" value={caseName} className="bg-gray-200 p-3" onChange={(event) => { setCaseName(event.target.value) }}/>
            <Input size="lg" placeholder="Judge" value={judge} className="bg-gray-200 p-3" onChange={(event) => { setJudge(event.target.value) }}/>
            <Input size="lg" placeholder="Prosecutor lawyer name" className="bg-gray-200 p-3" value={lawyer1} onChange={(event) => { setLawyer1(event.target.value) }}/>
            <Input size="lg" placeholder="Defender lawyer name" className="bg-gray-200 p-3" value={lawyer2} onChange={(event) => { setLawyer2(event.target.value) }}/>
            <Input size="lg" placeholder="Plaintiff" value={client1} className="bg-gray-200 p-3" onChange={(event) => { setClient1(event.target.value) }}/>
            <Input size="lg" placeholder="Plea" value={client2}  className="bg-gray-200 p-3" onChange={(event) => { setClient2(event.target.value) }}/>
            <Input size="lg" placeholder="Verdict" value={verdict} className="bg-gray-200 p-3" onChange={(event) => { setVerdict(event.target.value) }}/>
  
          </div>





        </form>
      </Card>
      <div className="flex items-center justify-center">
      <Web3Button
          contractAddress = {address}
          action={(contract) =>{
            contract.call("addData", [
                [caseNo, caseName, judge, lawyer1, lawyer2, client1, client2, verdict, uri]
              ,
            ])}
          }
        >
          Submit
        </Web3Button>
        </div>
      </div>
      </div>
    );
  }

export default Form;
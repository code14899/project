import React, { useState } from "react";
import {
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import Card from "../components/Card";
const address = "0x3d64226A740EC43B25a53596DA02208fc4214a7c";

const arr = []
const GuestPage = () => {

    const [judgeName, setJudgeName] = useState("");
    const [dataArray, setDataArray] = useState([]);

  return (
    <>
    <div className="flex flex-col px-10 justify-center items-center my-10">
       <Input size="lg" placeholder="Enter Judge's Name" className="w-full px-10 font-semibold" value={judgeName} onChange={(event) => { setJudgeName(event.target.value) }}/>

       <div className="mt-4">
       <Web3Button
          contractAddress = {address}
          action={async (contract) =>{
            const data = await contract.call("getJudgeCases", [judgeName])
            console.log(data);
            setDataArray(data);
        
        }
            
          }
        >
          Submit
        </Web3Button>
</div>
<div className="flex flex-wrap">
        {!(dataArray==[]) && dataArray.map((ele, ind) => {
            return (
                <div className="px-4"><Card array={ele}/></div>
            )
        
        })}
        </div>
        </div>
    </>
  );
};

export default GuestPage;

import React, { useState } from "react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import Card from "../components/Card";
import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
const address = "0x3d64226A740EC43B25a53596DA02208fc4214a7c";

const LawyerPage = () => {
  const { contract } = useContract(address);
  const { data: currentEntries, isLoading: isLoadingCurrentEntries } =
    useContractRead(contract, "getAllCases");

  const [lawyerName, setLawwyerName] = useState("");
  const [dataArray, setDataArray] = useState([]);

  return (
    <>
      <div className="flex flex-col px-10 justify-center items-center my-10">
        

        <Input
          size="lg"
          className="w-full px-10 font-semibold"
          placeholder="Enter Lawyer's Name"
          value={lawyerName}
          onChange={(event) => {
            setLawwyerName(event.target.value);
          }}
        />
      <div className="mt-4"> 
        <Web3Button
          contractAddress={address}
          action={async (contract) => {
            const data = await contract.call("getAllCases", []);
            console.log(data);
            setDataArray(data);
          }}
        >
          Submit
        </Web3Button>
</div>
          <div className="flex flex-wrap">
        {(!isLoadingCurrentEntries && lawyerName )? (
          dataArray.map((ele, ind) => {
            if(ele[3]==lawyerName || ele[4]==lawyerName)
            return <div className="px-4"><Card array={ele} /> </div>;
          })
        ) : (
          <div></div>
        )}
        </div>
      </div>
    </>
  );
};

export default LawyerPage;

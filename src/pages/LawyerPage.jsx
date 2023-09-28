import React from 'react'
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import Card from '../components/Card';
const address = "0x3d64226A740EC43B25a53596DA02208fc4214a7c";
const array = ["101","up vs bihar","aaa","pros lawyer","defender lawyer", "party 1", "party 2","pending",""]

let final;
const LawyerPage =() =>{

    
    const {contract} = useContract(address);
    const { data: currentEntries, isLoading: isLoadingCurrentEntries } = useContractRead(
        contract,
        "getAllCases"
    );
    




  return (
    <>
    <div className='flex flex-wrap px-10 justify-between my-10'>
        {/* <Card array={array} className=""/>
        <Card array={array}/>
        <Card array={array}/>
        <Card array={array}/>
        <Card array={array}/> */}
      {!isLoadingCurrentEntries ? (
        
        currentEntries.map((ele, ind) => {
            return (
                <Card array={ele}/>
            )
        
        })
      ) : (
        <div>isLoading</div>
      )}
      </div>
    </>
  )
}

export default LawyerPage
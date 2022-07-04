import React from "react";

const Overview = ({ block }) => {
  const { timeStamp, blockNumber, blockMiner, blockReward } = block;
  return (
    <div className="w-full border border-t-0">
      <div className=" w-full px-3">
        <div className="flex w-full p-3 border-b">
          <div className="w-1/4">Block number:</div>
          <div className="">{blockNumber}</div>
        </div>
        <div className="flex w-full p-3 border-b">
          <div className="w-1/4">Timestamp:</div>
          <div>{timeStamp}</div>
        </div>
        <div className="flex w-full p-3 border-b">
          <div className="w-1/4">Blockminer:</div>
          <div>{blockMiner}</div>
        </div>
        <div className="flex w-full p-3 ">
          <div className="w-1/4">Blockreward:</div>
          <div>{blockReward}</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

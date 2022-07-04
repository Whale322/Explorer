import React from "react";
import { Link } from "react-router-dom";


const CardItem = ({
  numberOfBlock,
  timeStamp,
  blockMiner,
  blockReward,
  checkDetails,
  Blocks

}) => {
  const hof = (func, arg) => {
    return () => {
      func(arg);
    };
  };

  return (
    <div className="flex border-b p-3 ">
      <div className="flex w-4/12">
        <div className="flex bg-slate-200 rounded-md mr-3 p-3">BK</div>
        <div className="mr-3 ">
          {checkDetails && (
            <div>
              {" "}
              <span className="font-bold"> Number of block: </span>{" "}
              {Blocks ? (<span> {numberOfBlock} </span>) : ( 
              <Link to="/details">
                <span
                  className="text-sky-500 hover:cursor-pointer  hover:text-sky-700"
                  onClick={hof(checkDetails, numberOfBlock)}
                >
                  {" "}
                  {numberOfBlock}{" "}
                </span>{" "}
              </Link>)}

            </div>
          )}
          <div>
            {" "}
            <span className="font-bold"> Timestamp: </span> {timeStamp}
          </div>
        </div>
      </div>
      <div className="flex w-5/12">
        <div>
          <div className="flex ">
            {" "}
            <span className="font-bold"> Blockminer: </span> {blockMiner}
          </div>
          <div>
            <span className="font-bold"> Blockreward: </span> {blockReward}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../assets/iconmonstr-plus-6.svg";
import { ReactComponent as Minus } from "../assets/iconmonstr-minus-6.svg";


const CardItem = ({
  numberOfBlock,
  timeStamp,
  blockMiner,
  blockReward,
  checkDetails,
  saveBlock,
  deleteBlock,
  prevBlocks,
 
}) => {
  const h = (func, arg) => {
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
              {prevBlocks ? (<span> {numberOfBlock} </span>) : ( 
              <Link to="/details">
                <span
                  className="text-sky-500 hover:cursor-pointer  hover:text-sky-700"
                  onClick={h(checkDetails, numberOfBlock)}
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

      {saveBlock ? (
        <div
          className="flex w-3/12 m-auto justify-center "
        >
          <span className=" flex justify-center w-6/12 hover:cursor-pointer" onClick={h(saveBlock, numberOfBlock)}>
            <Plus />
          </span>
        </div>
      ) : !prevBlocks ? (
        <div
          className="flex w-1/12 m-auto justify-center "
          onClick={h(deleteBlock, numberOfBlock)}
        >
          <span className=" hover:cursor-pointer">
            <Minus />
          </span>
        </div>
      ) : null }
    </div>
  );
};

export default CardItem;

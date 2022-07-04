import React from "react";

import CardItem from "./card-item";

const Card = ({ blocks, checkDetails}) => {


  return (
    <div className="w-100% border rounded-md shadow-xl">
      <div className="p-3">
        <div>
          {blocks?.map((block, idx) =>
            block.blockNumber ? (
              <CardItem
                key={idx}
                numberOfBlock={block.blockNumber}
                timeStamp={block.timeStamp}
                blockMiner={block.blockMiner}
                blockReward={block.blockReward}
                checkDetails={checkDetails}
              />
            ) : null
          )}
        </div>
      </div>
      </div>
  );
};

export default Card;

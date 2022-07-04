import React from "react";

import Card from "../components/card";



const Home = ({ blocks, checkDetails }) => {
  return (
    <div className="w-7/12 m-auto">
      {blocks?.length ? (
        <div className=" w-full  m-auto ">
          <Card
            blocks={blocks}
            checkDetails={checkDetails}
          />
        </div>
      ) : (
        <div className="text-center py-6 font-bold text-3xl">Please wait</div>
      )}
    </div>
  );
};

export default Home;

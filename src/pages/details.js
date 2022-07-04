import React from "react";
import { Link } from "react-router-dom";

import Overview from "../components/overview";

const DetailsPage = ({ block }) => {
  return (
    <div className="flex flex-col items-center justify-center w-5/12">
      <div className="flex border rounded-t-md w-full">
        <div className="mr-1 p-3 text-sky-500 hover:cursor-pointer border-2 border-transparent  border-b-sky-500 ">
          Overview
        </div>
      </div>
      <Overview block={block} />
      <div className="w-full flex justify-center">
        <button className="bg-sky-200 mt-5 text-sky-500 text-2xl text- p-3 rounded-md hover:bg-sky-500 hover:text-white ">
          {" "}
          <Link to="/"> Back </Link>
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;

import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import DetailsPage from "./pages/details";
import { Route, Routes } from "react-router-dom";
import { ethereumExplorerService } from "./components/ethrereumApi";


function App() {
  const [blocks, setBlock] = useState();
  const [detailsOfBlock, setDetailsOfBlock] = useState({});
  
  useEffect(() => {
    let addBlocks = ethereumExplorerService.getBlocks();
    const timer = setTimeout(() => {
      setBlock(addBlocks);
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const checkDetails = (numberOfBlock) => {
    setDetailsOfBlock(
      blocks.find((block) => block.blockNumber === numberOfBlock)
    );
  };

  return (
    <div className>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blocks={blocks}
              checkDetails={checkDetails}
            />
          }
        />
        <Route
          path="details"
          element={<DetailsPage block={detailsOfBlock} />}
        />
      </Routes>
    </div>
  );
}

export default App;

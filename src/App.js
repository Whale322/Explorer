import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import DetailsPage from "./pages/details";
import { Route, Routes } from "react-router-dom";
import { ethereumExplorerService } from "./components/ethrereumApi";
import Saved from "./pages/saved";

function App() {
  const [blocks, setBlock] = useState();
  const [detailsOfBlock, setDetailsOfBlock] = useState({});
  const [savedBlocks, setSavedBlocks] = useState([]);
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

  const saveBlock = (numberOfBlock) => {
    const newBlock = blocks.find(
      (block) => block.blockNumber === numberOfBlock
    );

    const checkOnMatching = savedBlocks.find(
      (block) => block.blockNumber === newBlock.blockNumber
    );
    !checkOnMatching
      ? setSavedBlocks([...savedBlocks, newBlock])
      : alert("this block is already saved");
  };

  const deleteBlock = (numberOfBlock) => {
    const newArr = savedBlocks.filter(
      (block) => block.blockNumber !== numberOfBlock
    );
    const checkOnMatching = savedBlocks.find(
      (block) => block.blockNumber === numberOfBlock
    );

    checkOnMatching ? setSavedBlocks(newArr) : alert("this block is not saved");
  };

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blocks={blocks}
              checkDetails={checkDetails}
              saveBlock={saveBlock}
            />
          }
        />
        <Route
          path="details"
          element={<DetailsPage block={detailsOfBlock} />}
        />
        <Route
          path="saved"
          element={
            <Saved
              checkDetails={checkDetails}
              deleteBlock={deleteBlock}
              savedBlocks={savedBlocks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

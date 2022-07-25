const storage = window.localStorage;

export const getBlocksFromLocalStorage = () => {
    return JSON.parse(storage.getItem("savedBlocks"))
      ? JSON.parse(storage.getItem("savedBlocks"))
      : [];
  };
  
  export const setBlocksInLocalStorage = (savedBlocks) => {
    storage.setItem("savedBlock", JSON.stringify(savedBlocks));
  };
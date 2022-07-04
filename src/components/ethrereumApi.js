import axios from "axios";

class EthereumExplorerService {
  arrayOfTimestamp = [
    1641814501, 1641728101, 1641641701, 1641555301, 1641468901, 1641382501,
    1641296101, 1641209701, 1641123301, 1641036901,
  ];

  API_KEY = `3FN3Y4IQDQWSK46ZJQS24QCQ5JF8YA1BU1`;

  getBlockNumberByTimestamp = async (timestamp) => {
    const numberOfBlockByTimestamp = await axios
      .get(
        `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${this.API_KEY}`
      )
      .then((res) => res.data.result)
      .catch((er) => console.log(er));
    return numberOfBlockByTimestamp;
  };

  getBlockByNumber = async (number) => {
    const block = await axios
      .get(
        `https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${number}&apikey=${this.API_KEY}`
      )
      .then((res) => res.data.result)
      .catch((er) => console.log(er));
    return block;
  };

  getBlocks = () => {
    let counter = 0;
    const blocks = [];

    setInterval(async () => {
      if (counter < 10) {
        const blockNumber = await this.getBlockNumberByTimestamp(
          this.arrayOfTimestamp[counter]
        );
        const block = await this.getBlockByNumber(blockNumber);
        blocks.push(block);
        counter++;
      }
    }, 500);
    return blocks;
  };
}

export const ethereumExplorerService = new EthereumExplorerService();

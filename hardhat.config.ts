import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

dotenv.config();
const { API_URL, PRIVATE_KEY } = process.env;


const config: HardhatUserConfig = {
  solidity: "0.8.0",
   networks: {
    ropsten: {
      url: API_URL || "",
      accounts:
        PRIVATE_KEY !== undefined ? [`${PRIVATE_KEY}`] : [],
    },
  },
};

export default config;

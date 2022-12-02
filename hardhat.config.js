
require("@nomicfoundation/hardhat-toolbox");
require ("@nomiclabs/hardhat-waffle");


const ALCHEMY_API_KEY = "alchemy api url";
const Private_Key = "your key";
import('hardhat/config').HardhatUserConfig ;
module.exports = {
  solidity: "0.8.9",
  networks: {
    polygon:{
      url:`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${Private_Key}`] ,
    },

    PolygonTestnet :{
      url:`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${Private_Key}`],
    }
  }
};

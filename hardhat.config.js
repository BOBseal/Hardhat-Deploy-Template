
require("@nomicfoundation/hardhat-toolbox");
require ("@nomiclabs/hardhat-waffle");


const ALCHEMY_API_KEY = "zdj7lIBtAEYKFMzMxZccG2mZ8-FtvdUf";
const Private_Key = "0x0a059f43211fa8bc7b35b68dafc733c0ab23553c543078d484c5f456c920e656";
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

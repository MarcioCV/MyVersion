var axios = require('axios');
import contract from "../../contracts.json";

export default async function searchByOwnerAndContract(req, res){
    var config = {
        method: 'get',
        url: `https://u4uol1bdbup6.usemoralis.com:2053/server/classes/EthNFTOwners?where={"owner_of":"${req.query.address.toLowerCase()}","token_address": "${contract.NFT_CONTRACT.toLowerCase()}"}`,
        headers: { 
          'X-Parse-Application-Id': `${process.env.APLICATION_ID}`,
          'X-Parse-Master-Key': `${process.env.MASTER_KEY}`
        }
      };
      
      axios(config)
      .then(function (response) {
        res.status(200).json(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      }); 
        
}

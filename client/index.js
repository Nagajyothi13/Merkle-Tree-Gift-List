const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // const name = process.argv.slice(2).join(' ');
  const name="Anna Stehr";
 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // name:"Anna Stehr"
    name
  });

  console.log({ gift });
}

main();

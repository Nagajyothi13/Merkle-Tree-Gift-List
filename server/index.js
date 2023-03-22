const express = require('express');
const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList.json');


const port = 1225;

const app = express();
app.use(express.json());

const MERKLE_TREE = new MerkleTree(niceList);
const MERKLE_ROOT = MERKLE_TREE.getRoot();

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
   const body = req.body.name;
  // TODO: prove that a name is in the list 

  //const name = 'Norman Block';
  const index = niceList.findIndex(n => n === body);
  const proof = MERKLE_TREE.getProof(index);
  const isInTheList = verifyProof(proof, body,MERKLE_ROOT);
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

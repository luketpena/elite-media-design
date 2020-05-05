const express = require('express');
const router = express.Router();
const axios = require('axios');
const stringify = require('../modules/stringify-safe');

router.get('/' , async (req,res)=>{
  try {
    const result = await axios.get('https://www.instagram.com/nfl/?__a=1');
    res.send(JSON.parse(stringify(result)).data.graphql.user);
  } catch(error) {
    console.log('Error getting Instagram feed:',error);
    res.sendStatus(400);    
  }
});

module.exports = router;
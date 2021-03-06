const express = require('express');
const router = express.Router();
const axios = require('axios');
const stringify = require('../modules/stringify-safe');

router.get('/' , async (req,res)=>{
  try {
    const result = await axios.get('https://www.instagram.com/goblue42agency/?__a=1');
    res.send(JSON.parse(stringify(result)).data.graphql.user);
    
    res.send(resultInfo);
  } catch(error) {
    console.log('Error getting Instagram feed:',error);
    res.sendStatus(400);    
  }
});

/*
  The /?__a=1 method is deprecated and somewhat unreliable. Facebook has been phasing this feature out since 2018 and now
  requires an API set up that is authorized by the user to access that information.

  This route worked locally at first, but then started returning an HTML file instead of a JSON file. It currently still
  worked on deployment in Heroku.

  UPDATE: it no longer works on Heroku. It seems after you hit it from one location a number of times, it stops working.
*/

module.exports = router;
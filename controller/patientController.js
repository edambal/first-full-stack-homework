const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { // Route Handler 

    res.send('Sending you to the show patients page');
    
  });


  module.exports = router;
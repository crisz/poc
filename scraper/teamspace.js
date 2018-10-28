var router = require('express').Router();

router.get('/teams', (req, res) => {

  res.json([
    {name: 'primo team'},
    {name: 'secondo team'},
    {name: 'terzo team'}
  ]);

  res.end();
}); 

module.exports = router;
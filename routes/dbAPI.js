const router = require('express').Router();
const { getMarkerInfo, saveNewLocation } = require('../models/dbAPI.js');

// get all playlist from specific user
router.get('/', getMarkerInfo, (req, res) => {
  res.json(res.results);
});


// insert new art location and info to the art db table
router.post('/', saveNewLocation, (req, res) => {
  res.json(res.results);
});


// // remove one song from the user's playlist
// /* need user_id and trackid to delete */
// router.delete('/:trackid', deleteOneSongFromPlaylist, (req, res) => {
//   res.json(res.results);
// });

module.exports = router;

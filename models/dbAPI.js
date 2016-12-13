const db = require('../db/db');

// get all Marker Locations (get)
function getMarkerInfo(req, res, next) {
  db.any(`SELECT * FROM art;`)
  .then(results => {
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

// save to playlist (post)
function saveNewLocation(req, res, next) {
  console.log('req.body: ', req.body)
  db.none(`INSERT INTO art (artist, img_url, address, lat, lng, info)
           VALUES ($/artist/, $/img_url/, $/address/, $/lat/, $/lng/, $/info/);`,
          req.body)
  .then(results => {
    // returns nothing
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  getMarkerInfo,
  saveNewLocation
};

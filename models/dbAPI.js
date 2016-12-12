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


module.exports = {
  getMarkerInfo
};

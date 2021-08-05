const router = require("express").Router();

module.exports = db => {
  router.get("/specialities", (request, response) => {
    db.query(`
      SELECT * from specialities;
    `)
    .then(({ rows: specialities }) => {
      response.json(specialities);
    });
  });


  return router;
};
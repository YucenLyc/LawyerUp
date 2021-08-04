const router = require("express").Router();

module.exports = db => {
  router.get("/cases", (request, response) => {
    db.query(`
      SELECT * from cases;
    `)
    .then(({ rows: cases }) => {
      response.json(cases);
    });
  });


  return router;
};
const router = require("express").Router();

module.exports = db => {
  router.get("/casesForSameLawyer", (request, response) => {
    db.query(`
      SELECT * from cases where cases.lawyer_id = 3 ;
    `)
    .then(({ rows: cases }) => {
      response.json(cases);
    });
  });

  return router;
};
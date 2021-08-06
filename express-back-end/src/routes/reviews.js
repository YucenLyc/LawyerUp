const router = require("express").Router();

module.exports = db => {
  router.get("/reviews", (request, response) => {
    db.query(`
      SELECT * from reviews;
    `)
    .then(({ rows: reviews }) => {
      response.json(reviews);
    });
  });


  return router;
};
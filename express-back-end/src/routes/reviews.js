const router = require("express").Router();

module.exports = db => {
  router.get("/reviews", (request, response) => {
    db.query(`
      SELECT reviews.id, users.name, date, content 
      FROM reviews JOIN lawyers ON reviews.lawyer_id = lawyers.id
      JOIN users on lawyers.user_id = users.id;
    `)
    .then(({ rows: reviews }) => {
      response.json(reviews);
    });
  });


  return router;
};
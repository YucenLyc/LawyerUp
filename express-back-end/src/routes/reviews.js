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

  router.post("/reviews", (req, res) => {

    db.query(`
      INSERT INTO reviews (lawyer_id, client_id, date, content)
      VALUES ($1, $2, $3, $4)
      RETURNING id;
    `, [req.body.lawyer_id, req.body.client_id, req.body.date, req.body.content])
    .then(() => {
      res.status(201).send('successful!');
    });
  });
  return router;
};

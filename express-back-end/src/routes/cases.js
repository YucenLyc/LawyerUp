const router = require("express").Router();

module.exports = db => {
  router.get("/cases", (request, response) => {
    db.query(`
      SELECT * from cases;
    `)
    .then(({ rows: cases }) => {
      // response.json(clients);
      response.json(cases);
        // cases.reduce(
        //   (previous, current) => ({ ...previous, [current.id]: current }),
        //   {}
        // )
     
    });
  });


  return router;
};
const router = require("express").Router();

module.exports = db => {
  router.get("/cases", (request, response) => {
    db.query(`
      SELECT cases.id, cases.lawyer_id, cases.client_id, cases.name, date, description, specialities.name as law_field
      FROM cases JOIN case_speciality on cases.id = case_speciality.case_id
      JOIN specialities on specialities.id = case_speciality.speciality_id;
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
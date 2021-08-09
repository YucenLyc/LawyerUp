const router = require("express").Router();

module.exports = db => {
  router.get("/casesForSameLawyer", (request, response) => {
    db.query(`
    SELECT cases.id, cases.lawyer_id, cases.client_id, users.name as client_name, cases.name, date, description, specialities.name as law_field
    FROM cases JOIN case_speciality on cases.id = case_speciality.case_id
    JOIN specialities on specialities.id = case_speciality.speciality_id
    JOIN clients on cases.client_id = clients.id
    JOIN users on users.id = clients.user_id
    where cases.lawyer_id = 3;
    `)
    .then(({ rows: cases }) => {
      response.json(cases);
    });
  });

  return router;
};
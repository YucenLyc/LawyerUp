const router = require("express").Router();

module.exports = db => {
  router.get("/cases", (request, response) => {
    db.query(`
      SELECT cases.id, cases.lawyer_id, cases.client_id, users.name as client_name, cases.name, date, description, specialities.name as law_field
      FROM cases JOIN case_speciality on cases.id = case_speciality.case_id
      JOIN specialities on specialities.id = case_speciality.speciality_id
      JOIN clients on cases.client_id = clients.id
      JOIN users on users.id = clients.user_id;
    `)
    .then(({ rows: cases }) => {
      response.json(cases);
    });
  });

  router.post("/cases", (req, res) => {
    const client_id = 3;

    db.query(`
      INSERT INTO cases (lawyer_id, client_id, name, date, description)
      VALUES ($1, $2, $3, $4, $5)
    `, [req.body.lawyer_id, client_id, req.body.name, req.body.date, req.body.description])
    .then(() => {
      res.status(201).send('successful!');
    });
  });

  return router;
};
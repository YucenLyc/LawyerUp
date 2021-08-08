const router = require("express").Router();

module.exports = db => {
  router.get("/cases", (request, response) => {
    db.query(`
      SELECT cases.id, cases.lawyer_id, cases.client_id, users.name as client_name, cases.name, date, description, specialities.name as law_field
      FROM cases JOIN case_speciality on cases.id = case_speciality.case_id
      JOIN specialities on specialities.id = case_speciality.speciality_id
      JOIN clients on cases.client_id = clients.id
      JOIN users on users.id = clients.user_id
      ORDER BY cases.date DESC;
    `)
    .then(({ rows: cases }) => {
      response.json(cases);
    });
  });

  router.post("/cases", (req, res) => {
    // const client_id = 3;
    console.log('coming here');

    db.query(`
      INSERT INTO cases (lawyer_id, client_id, name, date, description)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id;
    `, [req.body.lawyer_id, req.body.client_id, req.body.name, new Date().toDateString(), req.body.description])
    .then((result) => {
      // res.status(201).send('successful!');
      const id = result.rows[0].id;
      console.log('id: ', id);
      console.log('lawid: ', req.body.lawfield);
        db.query(`
        INSERT INTO case_speciality (case_id, speciality_id)
        VALUES ($1, $2);
      `, [id, req.body.lawfield])
      .then(() => {
        res.status(201).send('successful!');
      })
    });

  });

  return router;
};
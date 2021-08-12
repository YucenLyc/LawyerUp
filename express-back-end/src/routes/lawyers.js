const router = require("express").Router();

module.exports = db => {
  router.get("/lawyers", (request, response) => {
    db.query(`
      SELECT 
      lawyers.id, users.name, lawyers.user_id, email, password, profile,
      rate, years_of_experience, city, lawyers.image,
      array_agg (DISTINCT specialities.name) as speciality
      FROM users JOIN lawyers ON users.id = user_id
      JOIN lawyer_speciality ON lawyers.id = lawyer_speciality.lawyer_id
      JOIN specialities ON specialities.id = lawyer_speciality.speciality_id
      JOIN locations ON users.id = locations.user_id
      GROUP BY lawyers.id, users.name, lawyers.user_id, email, password, profile, rate, years_of_experience, city, lawyers.image;
    `)
    .then(({ rows: lawyers }) => {
      console.log(response);
      // response.json(lawyers);
      response.json(lawyers);
    });
  });

  return router;
};

const router = require("express").Router();

module.exports = db => {
  router.get("/clients", (request, response) => {
    db.query(`
      SELECT clients.id, name, clients.user_id, email, password, city 
      FROM users JOIN clients ON users.id = clients.user_id 
      JOIN locations ON users.id = locations.user_id;
    `)
    .then(({ rows: clients }) => {
      // response.json(clients);
      response.json(
        clients.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};
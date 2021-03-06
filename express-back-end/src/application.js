const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");

const users = require("./routes/users");
const lawyers = require("./routes/lawyers");
const clients = require("./routes/clients");
const cases = require("./routes/cases");
const closedcases = require("./routes/closedcases");
const opencases = require("./routes/opencases");
const casesForSameLawyer = require("./routes/casesForSameLawyer");
const specialities = require("./routes/specialized");
const reviews = require("./routes/reviews")


function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(ENV) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", users(db));
  app.use("/api", clients(db));
  app.use("/api", lawyers(db));
  app.use("/api", cases(db));
  app.use("/api", casesForSameLawyer(db));
  app.use("/api", specialities(db));
  app.use("/api", reviews(db));
  app.use("/api", closedcases(db));
  app.use("/api", opencases(db));

  
  app.use('/api/data', (req, res) => res.json({
    message: "Seems to work!",
  }));

  app.use('/api/hello', (req, res) => res.json({
    message: "Hello World!",
  }));

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function() {
    return db.end();
  };

  return app;
};

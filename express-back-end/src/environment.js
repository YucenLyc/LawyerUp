const path = require("path");

const ENV = process.env.NODE_ENV || "development";
console.log("env", ENV);
const PATH = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: PATH });

module.exports = ENV;

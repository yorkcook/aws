const db = require("../data/dbConfig.js");

module.exports = {
  getPeople
};

function getPeople() {
  return db("people");
}

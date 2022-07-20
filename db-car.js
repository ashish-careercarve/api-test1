const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "bsmwk6a847ug4xkpzk4h-mysql.services.clever-cloud.com",
  user: "u7sum6nqhk1qforh",
  password: "dmUjwzc2wjW09UI6oVEu",
  database: "bsmwk6a847ug4xkpzk4h"
});

module.exports = connection;

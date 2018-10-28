// Import MySQL connection.
var connection = require("./connection");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table +";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne(table, keyValue, cb) {
        var queryString = "INSERT INTO " + table + " ?;"

        connection.query(queryString, keyValue, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne(table, valueUpdate, condition, cb) {
        var queryString = "UPDATE " + table + " SET ? WHERE ?";

        connection.query(queryString, [valueUpdate, condition], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

module.exports = orm;
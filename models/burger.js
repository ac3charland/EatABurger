var orm = require("../config/orm");

var burger = {
    selectBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertBurger: function(name, cb) {
        var newBurger = {
            burger_name: name
        }
        orm.insertOne("burgers", newBurger, function(res) {
            cb(res);
        });
    },
    updateBurger: function(updateKeyValue, condition, cb) {
        orm.updateOne("burgers", updateKeyValue, condition, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;
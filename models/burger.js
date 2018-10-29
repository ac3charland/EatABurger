var orm = require("../config/orm");

var burger = {
    selectBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertBurger: function(name, cb) {
        orm.insertOne("burgers", "burger_name", name, function(res) {
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
var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectBurgers(function(data) {
        console.log(data);

        var hbrsObject = {
            burgers: data
        }
        //Process the data into the handlebars page
        res.render("index", hbrsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertBurger(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = { id: req.params.id }
    burger.updateBurger(
        {
            devoured: true
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;
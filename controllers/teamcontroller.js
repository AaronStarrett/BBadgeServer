let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let SuperBowlModel = sequelize.import("../models/team");

router.post("/", function (req, res) {
    let SuperBowlTeams = req.body.SuperBowlTeams;
    let SuperBowlWins = req.body.SuperBowlWins;

    SuperBowlModel.create({
        SuperBowlTeams: SuperBowlTeams,
        SuperBowlWins: SuperBowlWins,
    }).then(item => {
        res.json({ item });
    });
});

router.get("/pullsbtable", (req, res) => {
    SuperBowlModel.findAll().then(sbtable =>
        res.json(sbtable)
    );
});

router.delete('/pullsbtable/:id', function (req, res) {
    if (!req.errors) {
        SuperBowlModel.destroy({ where: { id: req.params.id } })
            .then(item => res.status(200).json(item))
            .catch(err => res.status(500).json({ error: err }))
    } else {
        res.status(500).json(req.errors)
    }
});

module.exports = router;
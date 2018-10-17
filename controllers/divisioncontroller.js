let express = require("express");
let router = express.Router();
let sequelize = require("../db");
let DivisionModel = sequelize.import("../models/division");


// router.post("/", function (req, res) {
//   let Division = req.body.Division;
//   let TeamName = req.body.TeamName;
//   let SuperBowls = req.body.SuperBowls;

//   DivisionModel.create({
//     Division: Division,
//     TeamName: TeamName,
//     SuperBowls: SuperBowls
//   }).then(item => {
//     res.json({ item });
//   });
// });

router.post('/create', function (req, res) {
  const divisionFromRequest = {
    Division: req.body.Division,
    TeamName: req.body.TeamName,
    SuperBowls: req.body.SuperBowls
  }
  if (!req.errors) {
    DivisionModel.create(divisionFromRequest).then(division => res.status(200).json(division))
      .catch(err => res.status(500).json({ error: err })
      )
  }
});

router.get("/pull", (req, res) => {
  DivisionModel.findAll().then(division =>
    res.json(division)
  );
});

//filter only by division
router.get("/:filter", (req, res) => {
  DivisionModel.findAll({ where: { Division: req.params.filter } }).then(division =>
    res.json(division)
  );
});

// router.put('/update/:id', (req, res) => {
//   console.log(req)
//   DivisionModel.findOne({ where: { id: req.body.id } }).then(division => {
//     console.log(divisions)
//     res.send('blah', division)
//   })
// });

router.put('/update/:id', function (req, res) {
  if (!req.errors) {
    DivisionModel.update(req.body, { where: { id: req.params.id } })
      .then(division => res.status(200).json(division))
      .catch(err => res.status(500).json({ error: err }))
  } else {
    res.status(500).json(req.errors)
  }
});

router.delete('/:id', function (req, res) {
  if (!req.errors) {
    DivisionModel.destroy({ where: { id: req.params.id } })
      .then(item => res.status(200).json(item))
      .catch(err => res.status(500).json({ error: err }))
  } else {
    res.status(500).json(req.errors)
  }
});

module.exports = router;

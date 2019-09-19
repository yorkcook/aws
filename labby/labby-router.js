const router = require("express").Router();

const Labby = require("../labby/labby-model");

router.get("/people", (req, res) => {
  Labby.getPeople()
    .then(people => {
      res.status(200).json(people);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `You ain't gonna get to see these people, FOOL!` });
    });
});

module.exports = router;

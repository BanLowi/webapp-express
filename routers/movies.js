const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

/* Index */
router.get("/", moviesController.index);

/* Show */
router.get("/:id", moviesController.show);
/* Store */

/* Update */

/* Destroy */

module.exports = router;
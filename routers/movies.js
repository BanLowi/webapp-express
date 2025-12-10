const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

/* Index */
router.get("/", moviesController.index);

/* Show */

/* Store */

/* Update */

/* Destroy */

module.exports = router;
const connection = require("../data/connection");

function index(req, res) {

    const sql = "SELCT * FROM movies";

    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: true, message: "Database query fail" });
        res.json(result);
    });
}

module.exports = { index };
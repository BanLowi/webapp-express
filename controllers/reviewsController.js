const connection = require("../data/connection");

function index(req, res) {

    const sql = "SELECT * FROM reviews";

    connection.query(sql, (err, result) => {
        if (err) {
            /* console.log(err); */
            return res.status(500).json({ error: true, message: "Database query fail" })
        };
        res.json(result);
    });
}

function show(req, res) {
    const id = req.params.id;

    const sql = "SELECT * FROM reviews WHERE movie_id = ?";

    connection.query(sql, [id], (err, result) => {
        if (err) {
            /* console.log(err); */
            return res.status(500).json({ error: true, message: "Database query fail" })
        };
        if (result.length === 0) {
            /* console.log(err); */
            return res.status(404).json({ error: true, message: "Movies not Found" })

        }
        res.json(result);
    });
}

module.exports = { index, show };
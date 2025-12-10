const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "movieschema"
});

connection.connect((err) => {
    if (err) return res.status(500).json({ error: true, message: "couldn't connect!" })
    console.log("connected!");
})

module.exports = connection;
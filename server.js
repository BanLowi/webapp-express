const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const moviesRouter = require("./routers/movies");

app.use(express.static("public"));

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
});

app.use("/movies", moviesRouter);
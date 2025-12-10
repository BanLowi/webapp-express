const express = require("express");
const app = express();
const PORT = 3000;
const moviesRouter = require("./routers/movies");

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
})

app.use("/movies", moviesRouter);
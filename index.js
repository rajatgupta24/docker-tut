const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<p>Hi, There!!!</p>");
});

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}...`))
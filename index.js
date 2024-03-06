require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./database/database.js");
const router = require("./routes/route.js");
const PORT = process.env.PORT || 5000;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const db_name = process.env.DB_NAME;

console.clear();
app.use(express.json());
app.use(cors());
database(db_name)
app.get("/", (req, res) => {
    res.status(200).send({
        status: "success",
        message: "This Is Root Directory"
    });
});

app.use("/api/user", router);

/*=================================*/
app.listen(PORT, () => {
    console.log(`\n Server is running on port - ${PORT}\n`);
});

// Export the Express app
module.exports = app;

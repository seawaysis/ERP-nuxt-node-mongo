const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const userController = require("./controllers/User");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// user
//
app.post("/signIn", userController.signIn);
app.get("/check_api", userController.checkApi);

app.listen(8080, '0.0.0.0', () => {
    console.log("Server running on port 8080");
});
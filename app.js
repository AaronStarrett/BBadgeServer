require("dotenv").config();

let express = require("express");
let app = express();
let sequelize = require("./db");
let bodyParser = require("body-parser");
let cors = require("cors");
let user = require("./controllers/usercontroller");
let division = require("./controllers/divisioncontroller");
let sbtable = require("./controllers/teamcontroller");

// sequelize.sync({ force: true });
sequelize.sync();
app.use(cors());
app.use(bodyParser.json());
app.use(require("./middleware/headers"));
app.use("/api/user", user);
app.use("/division", division);
app.use("/sbtable", sbtable);
app.listen(3001, function () {
  console.log("App is listening on 3001!");
});

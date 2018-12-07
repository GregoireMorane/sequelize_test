const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const models = require("./models");

const app = express();

const routerUsers = require("./routes/users");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));

app.use(morgan("dev"));

app.use('/users', routerUsers);

models.sequelize.sync().then(() => {
	app.listen(3002);
});
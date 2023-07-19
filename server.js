const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();

// parse aplikasi/json
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routers");
routes(app);

app.use("/auth", require("./middleware"));

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});

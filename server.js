const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// parse aplikasi/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routers");
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});

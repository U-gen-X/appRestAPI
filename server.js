const bodyParser = require('body-parser');
const express = require('express');
const { listen } = require('express/lib/application');
const app = express();

// parse aplikasi/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log(`Server started on port`);
});




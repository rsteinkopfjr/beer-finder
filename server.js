var express = require('express');

var app = express();

var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT);
});